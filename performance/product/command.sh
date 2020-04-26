# Run jmeter in non-gui mode, clear temp folder before run
rm ~/Apps/Public/docs/performance/product/temp/ -rf
mkdir ~/Apps/Public/docs/performance/product/temp
sh /home/haolinwei/Downloads/apache-jmeter-5.1.1/bin/jmeter -n -t ~/Apps/Public/docs/performance/product/getProductByCategory-test-plan.jmx -l ~/Apps/Public/docs/performance/product/temp/results.csv -e -o ~/Apps/Public/docs/performance/product/temp/dashboard -Jhost=ec2-3-17-158-206.us-east-2.compute.amazonaws.com -Jthreads=$1 -Jduration=$2
# run below to generate report for 7 qps & duration 300
# sh ~/Apps/Public/docs/performance/product/command.sh 7 300
