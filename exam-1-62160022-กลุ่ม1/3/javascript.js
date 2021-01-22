function myFunction() {

    var money_input = document.getElementById("p").value;
    var m_1000;
    var m_500;
    var m_100;
    var m_50;
    var m_20;
    var m_10;
    var m_5;
    var m_2;
    var m_1;
    var total ;

    m_1000 = money_input/1000;
    total = money_input%1000;
    m_500 = total/500;
    total = total%500;
    m_100 = total/100;
    total = total%100;
    m_50 = total/50;
    total = total%50;
    m_20 = total/20;
    total = total%20;
    m_10 = total/10;
    total = total%10;
    m_5 = total/5;
    total = total%5;
    m_2 = total/2;
    total =  total%2;
    m_1 = total;


    var str_1000 = m_1000.toString();
    var output_1000 = str_1000;
        if (output_1000<10){
    var   output_1000 = str_1000.slice(0,1);
    } 
        else if (output_1000>100){
    var   output_1000 = str_1000.slice(0,3);
    } 


    var s_500 = m_500.toString();
    var output_500 = s_500.slice(0,1);
    var s_100 = m_100.toString();
    var output_100 = s_100.slice(0,1);
    var s_50 = m_50.toString();
    var output_50 = s_50.slice(0,1);
    var s_20 = m_20.toString();
    var output_20 = s_20.slice(0,1);
    var s_10 = m_10.toString();
    var output_10 = s_10.slice(0,1); 
    var s_5 = m_5.toString();
    var output_5 = s_5.slice(0,1);
    var s_2 = m_2.toString();
    var output_2 = s_2.slice(0,1);
    var s_1 = m_1.toString();
    var output_1 = s_1.slice(0,1);

    var show = "Bank 1000:"+output_1000+"<br>"+"Bank &nbsp;500:"+output_500+"<br>"+"Bank &nbsp;100:"+output_100+"<br>"+"Bank &ensp;50:"+output_50+"<br>"+"Bank &ensp;20:"+output_20+"<br>"+"coin &ensp;10:"+output_10+"<br>"+"coin &nbsp;&ensp;5:"+output_5+"<br>"+"coin &nbsp;&ensp;2:"+output_2+"<br>"+"coin &nbsp;&ensp;1:"+output_1;
        document.getElementById("eee").innerHTML = show;

    }
