# Run jmeter in non-gui mode, clear temp folder before run
rm ~/Apps/Public/docs/performance/profile/temp/ -rf
mkdir ~/Apps/Public/docs/performance/profile/temp
sh /home/haolinwei/Downloads/apache-jmeter-5.1.1/bin/jmeter -n -t ~/Apps/Public/docs/performance/profile/reserveOrder-test-plan.jmx -l ~/Apps/Public/docs/performance/profile/temp/results.csv -e -o ~/Apps/Public/docs/performance/profile/temp/dashboard -Jhost=localhost -Jthreads=$1 -Jduration=$2
# run below to generate report for 7 qps & duration 300
# sh ~/Apps/Public/docs/performance/profile/command.sh 7 300
