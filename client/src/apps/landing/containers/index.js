import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import getServiceApiConfig from "../../common/utils/applicationConfigCommon";
import Header from "../../common/Header";
import FilterSection from "../components/filterSection";
import NewsFeedCard from "../components/newsFeedCard";
import "./style/index.css";
import { buildUrl } from "../../common/utils/common";

/**
 *
 * @function Landing
 * @export
 * @returns This function will return the html for the landing page on the basis of conditioned
 */
export default function Landing() {
	const [searchText, setSearchText] = React.useState("");
	const [pageIndex, setPageIndex] = React.useState(1);
	const [totalRecords, setTotalRecords] = React.useState(0);
	const [newsData, setNewsData] = React.useState([]);
	const [hasMore, setHasMore] = React.useState(true);

	/**
	 * @function handleSearchText
	 * @summary this function will use to set the sett the pageIndex 1, search text which is coming from search box
	 * @param {*} searchText
	 * @returns null
	 */
	const handleSearchText = (searchText) => {
		setSearchText(searchText);
		setNewsData([]);
		setTotalRecords([]);
		setPageIndex(1);
		setHasMore(true);
	};
	/**
	 * @function handleFetchNextData
	 * @summary this function is used to handleFetchNextData by incrementing the pageIndex 1
	 * @param {*}
	 * @return null
	 */
	const handleFetchNextData = () => {
		setPageIndex(pageIndex + 1);
	};

	/**
	 * @variable loader
	 * @summary this function returns loader html
	 * @param {*}
	 * @returns   loader html
	 */
	const loader = <h4>Loading...</h4>;

	/**
	 *@function noDataPresent
	 *
	 * @param {*}
	 * @returns html containing no data present html
	 */
	const noDataPresent = () => <h4>No Data is present</h4>;

	/**
	 *@function fetchData
	 *
	 * @param {*}
	 * @returns null
	 */
	const fetchData = () => {
		const { url } = getServiceApiConfig("getNewsData");
		const params = {
			searchText,
			pageIndex,
		};
		axios
			.get(buildUrl(url, params))
			.then((response) => {
				const { data: _data } = response;
				const { status, data } = _data;
				if (status) {
					const { totalResults, articles } = data;
					const updateNewsDataArr = [...newsData, ...articles];
					setTotalRecords(totalRecords);
					setNewsData(updateNewsDataArr);
					setHasMore(updateNewsDataArr.length < totalResults);
				} else {
					setPageIndex(pageIndex);
					setHasMore(false);
				}
			})
			.catch((err) => {
				setTotalRecords(0);
				setNewsData([]);
				setHasMore(false);
			});
	};

	useEffect(fetchData, [pageIndex, searchText]);

	return (
		<div className="news-page">
			<Header title="UK NEWS" />
			<div id="scrollableDiv" className="news-section">
				<FilterSection onSearchChange={handleSearchText} />
				{newsData.length ? (
					<InfiniteScroll
						dataLength={newsData.length}
						next={handleFetchNextData}
						hasMore={hasMore}
						loader={loader}
					>
						{newsData.map((data) => (
							<NewsFeedCard key={Math.random()} {...data} />
						))}
					</InfiniteScroll>
				) : (
					noDataPresent()
				)}
			</div>
		</div>
	);
}
