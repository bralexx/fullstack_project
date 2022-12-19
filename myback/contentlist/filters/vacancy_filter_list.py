from .filter_list import FilterList
from .public_wrappers import *

vacancy_filter_list = FilterList([
  FieldSorting(src_name='sorting', public_name='Sorting', options={
    'rating':'by rating',
    'average_salary':'by average salary', 
    'min_salary':'by min salary', 
    'max_salary':'by max salary'
  }),
  MultiChoiceFromBoolean(src_name='required_skills', public_name='Required skills', options={
    'python_required':'Python',
    'excel_required':'Excel',
    'r_lang_required':'R',
    'spark_required':'Spark',
  }),
  MultiChoiceFromStr(src_name='company_size', public_name='Company size', options={
    '1 to 50 employees':'1 to 50 employees',
    '51 to 200 employees':'51 to 200 employees',
    '201 to 500 employees':'201 to 500 employees',
    '501 to 1000 employees':'501 to 1000 employees',
    '1001 to 5000 employees':'1001 to 5000 employees',
    '5001 to 10000 employees':'5001 to 10000 employees',
    '10000+ employees':'10000+ employees',
  }),
])