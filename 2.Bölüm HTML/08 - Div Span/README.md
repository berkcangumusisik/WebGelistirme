 # TABLO İŞLEMLERİ
 
- Tablo oluşturmak için ```<table></table>``` etiketi kullanılır.
- Tablo içine ```<tr></tr>``` etiketi ile satırlar eklenir.
- Tablo içine ```<td></td>``` etiketliyle sütünlar eklenir.
- ```<th></th>``` etiketleri tablonun başlıklarıdır.
- table içine border ="" attribute verilerek kenarlık oluşturulur.
- Satır birleştirme işlemi için ```<td>``` etiketi içerisinde rowspan = "" eklenir.
- Sütun birleştirme işlemi için```<td>``` etiketi içerisinde colspan = "" eklenir.


```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tablolar</title>
</head>
<body>
    <table border="1">
        <thead>
            <tr>
                <th> Kurs Adı</th>
                <th> Ders Saati</th>
                <th> Ders Adedi</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> Komple Web Geliştirme</td>
                <td> 45</td>
                <td> 300</td>
            </tr>
            <tr>
                <td> Core 2 MVC Eğitimi: Sıfırdan İleri Seviyeye</td>
                <td>20</td>
                <td rowspan="2">300</td>

            </tr>
            <tr>
                <td colspan="2" > Core 2 MVC Eğitimi: Sıfırdan İleri Seviyeye</td>
                

            </tr>
    </tbody>
    </table>
</body>
</html>
```
![image](https://user-images.githubusercontent.com/75336900/126834598-5cc835de-ef28-4a58-ac9b-f522d6547162.png)


