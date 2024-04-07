import os 
print(os.system("aws sts get-caller-identity"))
print(os.system("aws s3 ls"))

