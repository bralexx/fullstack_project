from django.db import models


class Vacancy(models.Model):
  job_title = models.CharField(verbose_name='Job Title', max_length=100)
  job_description = models.CharField(verbose_name='Description', max_length=10000)
  rating = models.FloatField(verbose_name='Rating', null=True)
  estimated_salary = models.CharField(verbose_name='Estimated Salary', max_length=50, null=True)
  min_salary = models.IntegerField(verbose_name='min_salary', null=True)
  max_salary = models.IntegerField(verbose_name='max_salary', null=True)
  average_salary = models.FloatField(verbose_name='average_salary', null=True)
  python_required = models.BooleanField(verbose_name='python_yn', null=True)
  excel_required = models.BooleanField(verbose_name='excel', null=True)
  r_lang_required = models.BooleanField(verbose_name='R_yn', null=True)
  spark_required = models.BooleanField(verbose_name='spark', null=True)
  company_size = models.CharField(verbose_name='Size', max_length=30, null=True)

  def __str__(self):
    return 'title: {}'.format(self.job_title)