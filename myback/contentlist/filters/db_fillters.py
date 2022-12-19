from django.db.models.query import QuerySet

class DBFilter():
  field_name='no field name'
  def __init__(self, **kwargs):
    self.__dict__.update(kwargs)

  def __call__(self, query_set:QuerySet):
    raise NotImplementedError

class BooleanFieldFilter(DBFilter):
  def __call__(self, query_set:QuerySet, inverse=False):
    kwargs = {self.field_name:True != inverse}
    return query_set.filter(**kwargs)

class StrFieldFilter(DBFilter):
  def __call__(self, query_set:QuerySet, accepted_options):
    kwargs = {self.field_name + '__in':accepted_options}
    qs = query_set.filter(**kwargs)
    return qs

class FieldSortingFilter(DBFilter):
  def __call__(self, query_set:QuerySet, sorting_field):
    return query_set.order_by(sorting_field)