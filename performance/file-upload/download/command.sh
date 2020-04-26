# Run jmeter in non-gui mode, clear temp folder before run
rm ~/Apps/Public/docs/performance/file-upload/download/temp/ -rf
mkdir ~/Apps/Public/docs/performance/file-upload/download/temp
sh /home/haolinwei/Downloads/apache-jmeter-5.1.1/bin/jmeter -n -t ~/Apps/Public/docs/performance/file-upload/download/download-file-test-plan.jmx -l ~/Apps/Public/docs/performance/file-upload/download/temp/results.csv -e -o ~/Apps/Public/docs/performance/file-upload/download/temp/dashboard -Jhost=ec2-3-136-106-13.us-east-2.compute.amazonaws.com -Jthreads=$1 -Jduration=$2
# run below to generate report for 7 qps & duration 300
# sh ~/Apps/Public/docs/performance/file-upload/command.sh 7 300
