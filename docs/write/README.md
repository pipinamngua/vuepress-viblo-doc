# How to write a blog

## Markdown
As you know, Viblo uses Markdown to write articles.

Markdown is a markup language with rough text syntax, and is quite strange to many. To get a good article, of course, what you need to do first is to master the syntax of Markdown.

Refer to Markdown's basic syntax at [day](https://daringfireball.net/projects/markdown/syntax).

Basic features such as bold, italic, Heading, Order List, Quote, Insert Link, Insert Image ... are Markdown support, and there are shortcut buttons at the top of the editor, you can use if not Remember their syntax

[English](https://viblo.asia/uploads/99328dd4-b4e9-40e1-81ba-a7faeaa2e928.png)

Some features are not included in the basic syntax of Markdown, but are still supported by Viblo, such as creating tables.

For example, you can have a table with the Markdown code similar to the following.

```
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |


## HTML tag

**Viblo** allows you to insert some HTML tags into posts, but only stops at the limit.

You can use simple tags like `, <hr>, <ul>, <li> ... `to make the post as you like in cases where Markdown does not support. (eg down the line inside a table for example)

**Always use the Markdown syntax when possible.**

## Highlight code

Besides highlighting the inline code by using `code here`, Viblo also supports highlighting a block of code with the following syntax.
```
	```Language
		// Code Here
	```
```


For example, we have the following code, and it will be highlighted according to the syntax of **PHP**.
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


The list of programming languages ​​supported by Viblo support can be found in the dropdown list.

[Anh1](https://viblo.asia/uploads/77eeb92d-0736-415e-bd29-494ae4bc68a5.png)

## Upload photos
**Viblo** has a tool **Image Uploader**, allowing users to upload photos to the server **Viblo** to insert directly into the article.

imageuploader.png

You can also upload an image to represent the article. This image will appear at the top of your post, and you can replace it, or delete it at any time. If the article has no avatar,**the image of the first category of the article will be used instead** (but will not be displayed inside the article).

## Create a TOC
**TOC**, or Table of Contents, is the index system for posts that are automatically generated if you present the post in a standard layout of **Viblo**.

By default, h1 (#), h2 (##), h3 (###) tags are automatically added to **TOC**.
[Anh2](https://viblo.asia/uploads/85c26f9c-1eca-45e2-b536-47847a317e24.png)

A well presented article, with coherent TOC

So when creating articles, you try to use the above tags to divide the large items in your post offline. Thus, the top few writers will have a list of specific TOCs, which are presented coherently, making it easy for viewers to check through the contents of your article.

## Mention

**Viblo** allows you to mention a user in the post, as well as in the comments using the @ character. However you need to mention **under their username**, not the display name.

For example @ thangtd90, @vigov5

People who receive Mention **will receive notification** from you (unless they turn it off in setting).


## Emoticons
**Viblo** offers a system of emoticons that you can insert into the article, or comment for more lively.

Surely soon there will feature the list of emo =))

## TL; DR

Self study the syntax **Markdown**, regularly view other user's posts, and ask questions about why others can post such articles.

Maybe that's a good way for you to get used to **Viblo**(ok)

Wish you will have the beautiful and quality articles as expected with **Viblo**.
