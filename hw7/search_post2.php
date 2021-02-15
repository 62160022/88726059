<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
    <title>ค้นหาเพลง</title>
</head>
<body>
    <center>
    <body background="https://images.pexels.com/photos/255377/pexels-photo-255377.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%" height="100%" >
            <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="400" height="250">
    <BODY BGCOLOR="#4682B4">
    <div class="a1">
        <h2>ค้นหาเพลง</h2>
        <input type="text" id="nn">
        
        <select id="yy">
            <option value='0'>ปีที่ออกอัลบั้ม</option>
        <?php
        // connect database 

        $connect = mysqli_connect("localhost", "root", "", "62160022"); 
        
    
            
        $sql = " SELECT * FROM album";
            
        $result = mysqli_query($connect, $sql);

        while($row = $result->fetch_object())
        {
             echo "<option value='$row->AlbumID'>$row->ReleaseYear</option>";
        }

    ?>
        </select>
        <button onclick="search()" class="button button3">ค้นหา</button>
        <div id="disp"></div>
    </div>
<script>
    
    function nl2br(str,is_xhtml){
    var breakTag = (is_xhtml || typeof is_xhtml == 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,'$1' + breakTag + '$2');
}
    function search(){
        var nn = document.getElementById('nn').value;
        var yy = document.getElementById('yy').value;
        console.log("nn=" + nn);
        console.log("yy=" + yy);
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                arr = JSON.parse(this.responseText);
                console.log(arr);
                if(arr.lenght == 0){
                    html = `<h4>Not Found</h4>`;
                }else{
                    html = "";
                    for (i = 0; i < arr.length; i++) {
                        html += `
                                <div class="card">
                                    <div class="card-body">
                                    <h4 class="card-title">เพลง ${arr[i].MusicName}</h4>
                                    <h4 class="card-title">อัลบั้ม ${arr[i].AlbumName}</h4>
                                    <h4 class="card-title">ศิลปิน ${arr[i].BandName}</h4>
                                    <p class="card-text">${nl2br(arr[i].Lyrics)}</p>
                                    </div>
                                </div>`;
                    }
                    document.getElementById('disp').innerHTML = html;
                }
            }
        };
        var parameters = "nn=" + nn + "&yy=" + yy;
        xmlhttp.open("post", "search_post.php");
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(parameters);
    }
</script>
</center></BODY>
</body>
</html>




