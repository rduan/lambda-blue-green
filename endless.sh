#!/bin/bash

count=0

while :
do
    let count=count+1
    # sls invoke -f hello -l --data ${count}
    aws sns publish --region eu-west-1 --topic-arn "arn:aws:sns:eu-west-1:012862735759:PredictionEventsDev" --message ${count}
done
