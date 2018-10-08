# Cách viết blog

## Markdown
Như đã biết, Viblo sử dụng Markdown để viết bài.

Markdown là một ngôn ngữ đánh dấu với cú pháp văn bản thô, và còn khá xa lạ với nhiều người. Để có được bài viết tốt, đương nhiên điều bạn cần làm trước hết là nắm vững được cú pháp của Markdown.

Tham khảo cú pháp cơ bản của Markdown tại [day](https://daringfireball.net/projects/markdown/syntax)

Những tính năng cơ bản như in đậm, in nghiêng, Heading, Order List, Quote, Chèn Link, Chèn Ảnh ... đều được Markdown support, và có các nút shortcut ở phía trên của editor, bạn có thể sử dụng nếu không nhớ cú pháp của chúng

![Anh](https://viblo.asia/uploads/99328dd4-b4e9-40e1-81ba-a7faeaa2e928.png)

Một số tính năng không được bao gồm ở trong cú pháp cơ bản của Markdown, nhưng vẫn được Viblo hỗ trợ, có thể kể đến như tạo table.

Chẳng hạn bạn có thể kẻ bảng với đoạn mã Markdown tương tự như sau.

```
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  

## HTML tag

**Viblo** cho phép bạn chèn một số tag HTML vào bài viết, nhưng chỉ dừng ở mức giới hạn.

Các bạn có thể sử dụng những tag đơn giản như `<br>, <hr>, <ul>, <li> ...` để trình bày bài viết theo ý muốn của mình trong những trường hợp mà Markdown không hỗ trợ (ví dụ như xuống dòng bên trong một table chẳng hạn)

**Hãy luôn sử dụng cú pháp Markdown khi có thể.**

## Highlight code

Bên cạnh việc làm nổi bật inline code bằng cách dùng `code here`, Viblo còn support việc highlight cả một code block với cú pháp như sau
```
	```Language
	    // Code Here
	```
```

Ví dụ như ta có một đoạn code sau, và nó sẽ được highlight theo cú pháp của **PHP**.
```
	```PHP
		$colors = ['red', 'green', 'blue', 'yellow'];

		foreach ($colors as $value) {
		    echo "$value <br>";
		}
	```
```

```PHP
	$colors = ['red', 'green', 'blue', 'yellow'];

	foreach ($colors as $value) {
	    echo "$value <br>";
	}
```

Danh sách những ngôn ngữ lập trình được Viblo support bạn có thể xem ở list dropdown Hightlight.

![Anh1](https://viblo.asia/uploads/77eeb92d-0736-415e-bd29-494ae4bc68a5.png)

## Upload ảnh 
**Viblo** có cung cấp công cụ **Image Uploader**, cho phép người dùng upload ảnh lên server của **Viblo** để rồi chèn trực tiếp vào bài viết.

imageuploader.png

Ngoài ra bạn cũng có thể upload một hình ảnh để làm ảnh đại diện cho bài viết. Hình ảnh này sẽ xuất hiện ở đầu bài viết của bạn, và bạn có thể thay thế, hay xóa bỏ nó bất cứ khi nào. Nếu bài viết không có ảnh đại diện, **thì hình ảnh của category đầu tiên của bài viết sẽ được sử dụng thay thế** (nhưng sẽ không được hiện ở bên trong bài viết).

## Tạo TOC
**TOC**, hay Table of Contents, là hệ thống index cho bài viết được tự động tạo ra nếu như bạn trình bày bài viết theo một layout chuẩn của **Viblo**.

Mặc định những thẻ h1 (#), h2 (##), h3 (###) sẽ được tự động đưa vào **TOC**.
![Anh2](https://viblo.asia/uploads/85c26f9c-1eca-45e2-b536-47847a317e24.png)

Một bài viết trình bày tốt, có TOC mạch lạc

Thế nên khi tạo bài viết, bạn cố gắng sử dụng những thẻ trên để phân chia các mục lớn trong bài viết của mình nhé. Như vậy thì ở trên đầu vài viết sẽ có một danh sách TOC cụ thể, được trình bày mạch lạc, giúp người xem có thể dễ dàng check qua một lượt nội dung bài viết của bạn.

## Mention

**Viblo** cho phép bạn mention một user trong nội dung bài viết, cũng như trong nội dung comment bằng cách sử dụng ký tự @. Tuy nhiên bạn cần mention **theo username của họ**, chứ không phải tên hiển thị.

Ví dụ như @thangtd90, @vigov5

Người được Mention **sẽ nhận được notification** từ phía bạn (trừ khi họ tắt nó đi trong setting).

## Emoticons
**Viblo** có cung cấp một hệ thống emoticons để bạn có thể chèn vào bài viết, hay comment cho thêm phần sinh động.

Chắc sẽ sớm có tính năng hiện thị danh sách các emo =))

## TL;DR

Tự học cú pháp **Markdown**, thường xuyên xem những bài viết của user khác, và đặt ra câu hỏi xem tại sao người khác lại có thể trình bày được bài viết như vậy.

Có lẽ đó cũng là một cách hay để bạn có thể dần làm quen với **Viblo** (ok)

Chúc bạn sẽ có được những bài viết đẹp và chất lượng như đúng kỳ vọng với **Viblo**.
