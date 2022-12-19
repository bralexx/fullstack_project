from django.db.models.query import QuerySet
from .db_fillters import *

class Filter:
  src_name = None
  public_name = None
  def get_public_view(self):
    raise NotImplementedError
  def apply(self, query_set:QuerySet, params):
    raise NotImplementedError

class ClassFilter(Filter):
  # type = ''
  # options_view = [] 
  def get_public_view(self):
    # print(self.options_view)
    view = {
      'src_name': self.src_name, 
      'public_name': self.public_name,
      'type': self.type,
      'options': self.options_view,
    }
    return view
  
  def __init__(self, src_name, public_name = None, options_dict = {}, type_='MULTIPLE_CHOICE'):
    self.options_view = []
    self.type = type_
    self.src_name = src_name
    if public_name is None:
      public_name = src_name
    self.public_name = public_name
    self.option_filters = {}
    for src_option_name, public_option_name in options_dict.items():
      self.options_view.append({'src_name': src_option_name, 'public_name': public_option_name})

class MultiChoiceFromBoolean(ClassFilter):
  def __init__(self, src_name, public_name = None, options = {}):
    super().__init__(src_name, public_name, options)
    for src_option_name, public_option_name in options.items():
      self.option_filters[src_option_name] = BooleanFieldFilter(field_name=src_option_name)
  
  def apply(self, query_set:QuerySet, params):
    accepted_options = params.split(',')
    for src_option_name in accepted_options:
      query_set = self.option_filters[src_option_name](query_set)
    return query_set

class MultiChoiceFromStr(ClassFilter):
  def __init__(self, src_name, public_name = None, options = {}):
    super().__init__(src_name, public_name, options)
    self.db_filter = StrFieldFilter(field_name=src_name)
  
  def apply(self, query_set:QuerySet, params):
    accepted_options = params.split(',')
    return self.db_filter(query_set, accepted_options=accepted_options)

class FieldSorting(ClassFilter):
  def __init__(self, src_name, public_name=None, options={}):
    super().__init__(src_name, public_name, options, type_='SINGLE_CHOICE')
    self.db_filter = FieldSortingFilter()
  
  def apply(self, query_set:QuerySet, params):
    sorting_field = params
    return self.db_filter(query_set, sorting_field)