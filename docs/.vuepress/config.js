module.exports = {
	port: process.env.PORT || 3000,
	locales: {
		// The key is the path for the locale to be nested under.
		// As a special case, the default locale can use '/' as its path.
		'/': {
			lang: 'English', // this will be set as the lang attribute on <html>
			title: 'VietNam IT Blog',
			description: 'Welcome to viblo documentation'
		},
		'/vi/': {
			lang: 'Vietnamese',
			title: 'VietNam IT Blog',
			description: 'Chào mừng bạn đến mới documentation Viblo'
		}
	},
	themeConfig: {
		locales: {
			'/': {
				head: [
					['link', { rel: 'icon', href: '/viblo_logo.png' }]
				],
				selectText: 'English',
				label: 'English',
				//activeHeaderLinks: false,
				repo: '',
				editLinks: false,
				editLinkText: '',
				lastUpdated: '',
				nav: [
					{
						text: 'Home',
						link: '/'
					},
					{
						text: 'Docs',
						items: [
							{
								text: 'Introduction',
								link: '/basic/'
							},
							{
								text: 'Rules',
								link: '/rule/'
							},
							{
								text: 'Write Blog',
								link: '/write/'
							},
						]
					},
					{
						text: 'Contact',
						items: [
							{
								text: 'Twitter',
								link: 'https://www.twitter.com/'
							},
							{
								text: 'Email',
								link: 'mailto:hello@email.com'
							}
						]
					}
				],
				docsDir: 'docs',
				sidebar: 'auto',
				repo: 'https://github.com/pipinamngua/vuepress-viblo-doc',
			},
			'/vi/': {
				head: [
					['link', { rel: 'icon', href: '/viblo_logo.png' }]
				],
				selectText: 'Vietnamese',
				label: 'Vietnamese',
				//activeHeaderLinks: false,
				repo: '',
				editLinks: false,
				editLinkText: '',
				lastUpdated: '',
				nav: [
					{
						text: 'Trang chủ',
						link: '/vi/'
					},
					{
						text: 'Tài liệu',
						items: [
							{
								text: 'Giới thiệu',
								link: '/vi/basic/'
							},
							{
								text: 'Quy định',
								link: '/vi/rule/'
							},
							{
								text: 'Cách viết Viblo',
								link: '/vi/write/'
							},
						]
					},
					{
						text: 'Liên hệ',
						items: [
							{
								text: 'Twitter',
								link: 'https://www.twitter.com/'
							},
							{
								text: 'Email',
								link: 'mailto:hello@email.com'
							}
						]
					}
				],
				docsDir: 'docs',
				sidebar: 'auto',
				repo: 'https://github.com/pipinamngua/vuepress-viblo-doc',
			}
		}
	}
}
