from flask import *
from app_master.config import Config
import boto3

app_master = Flask(__name__)
app_master.config.from_object(Config)

from app_master import routes

cw_client = boto3.client('cloudwatch', **config.AWS_CONNECTION_ARGS)
ec2_resource = boto3.resource('ec2', **config.AWS_CONNECTION_ARGS)
