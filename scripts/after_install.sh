#!/bin/bash
echo 'run after_install.sh: ' >> /home/ec2-user/freelancing/deploy.log

echo '/home/ec2-user/freelancing' >> /home/ec2-user/freelancing/deploy.log
cd /home/ec2-user/freelancing >> /home/ec2-user/freelancing/deploy.log

echo 'npm install' >> /home/ec2-user/freelancing/deploy.log 
npm install >> /home/ec2-user/freelancing/deploy.log