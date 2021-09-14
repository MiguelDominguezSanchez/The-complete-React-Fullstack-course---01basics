import React from 'react'
import NewsItem from './news_list_items'

const newsList = (props) => {
	const news = props.news.map((item) => <NewsItem item={item} key={item.id} />)

	return <>{news}</>
}

export default newsList
