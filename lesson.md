Video 12:

-SỬ DỤNG FORM VÀ POST REQUEST VỚI NODE.JS
bài này thì dùng form (kiểu như cái sign up của tui á )

Video 11:

-ROUTER PARAMS - XÂY DỰNG TRANG CHI TIẾT USERS
(tui sửa code rùi nên thấy hơi khác nha )
video ni chủ yếu là ổng ns về cái route param với lại tạo trang detail users á
ở cuối trang có cái bảng ông bấm zô detail là ra cái chi tiết người dùng

Video 10:

-CREATE THANH NAV - EJS LOOP DATA
(tui có thanh nav rồi nên tui ejs loop data)
cái này là tui tạo bảng rồi vức mấy thằng user zô trong nớ thui

Video 9:

- HTTP request method và sử dụng database
  Title:
  1.Cài đặt cơ sở dữ liệu MySQL với XAMPP
  2.Tạo tables, thêm dữ liệu database với Sequelize CLI
  3.Kết Nối Tới MySQL Database với Sequelize

Video 8:

- Mô hình mvc

Video 7:

- ...
<div class="w3-container">
        <h2>List users Table</h2>
  
        <table class="w3-table-all w3-hoverable">
          <thead>
            <tr class="w3-light-grey">
              <th>ID</th>
              <th>First Name:</th>
              <th>Last Name:</th>
              <th>Number Phone:</th>
              <th>Email:</th>
              <th>Password:</th>
            </tr>
          </thead>
          <tbody>
            <% for(let i=0; i < dataUser.length; i++) { %>
            <tr>
              <td><%= dataUser[i].id %></td>
              <td><%= dataUser[i].firstName %></td>
              <td><%= dataUser[i].lastName %></td>
              <td><%= dataUser[i].number %></td>
              <td><%= dataUser[i].email %></td>
              <td><%= dataUser[i].password %></td>
              <td>
                <a href="/detail/user/<%= dataUser[i].id %>" target="_blank"
                  >Detail</a
                >
                <button type="button">Edit</button>
                <button type="button">Delete</button>
              </td>
            </tr>
            <% } %>
          </tbody>
        </table>
      </div>
