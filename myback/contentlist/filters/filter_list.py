import typing as tp
from django.db.models.query import QuerySet

from .public_wrappers import Filter

class FilterList:
  def __init__(self, filter_list:tp.List[Filter]):
    self.filter_list = filter_list
  
  def get_json(self):
    filter_list_json = []
    for filter in self.filter_list:
      filter_list_json.append(filter.get_public_view())
    return filter_list_json
  
  def apply_filters(self, query_set:QuerySet, query_params):
    for filter in self.filter_list:
      filter_params = query_params.get(filter.src_name)
      print(filter.src_name, filter_params)
      if filter_params is None or filter_params == '':
        continue
      query_set = filter.apply(query_set, filter_params)
    return query_set