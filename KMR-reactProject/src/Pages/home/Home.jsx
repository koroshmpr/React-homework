import React, { useState, useEffect } from 'react';
import ReactPaginate from "react-paginate";
import Navbar from '../../components/navbar/Navbar';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FetchPosts } from '../../store/posts';

const Home = () => {
    const { posts } = useSelector((state) => state.posts)
    const [pageNumber, setPageNumber] = useState(0);
    const postData = posts.record;
    const postsPerPage = 6;
    const pagesVisited = pageNumber * postsPerPage;
    const pageCount = Math.ceil(postData?.length / postsPerPage);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FetchPosts())
    }, [])

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }
    return (
        <>
            <Navbar />
            <section className={classes.main}>
                <h2>you can buy anything you want </h2>
                <h6>in this store you can find what you want and order ...</h6>
            </section>
            <section className='container-fluid mt-5'>
                <div className='row justify-content-center g-0 p-0 m-0'>
                    {postData && postData.slice(pagesVisited, pagesVisited + postsPerPage).map((post) => (
                        <div className={`${classes.itemShow} col-11 col-md-5 col-lg-3 col-xl-3 card m-2 p-2`} key={post.id}>
                            <h5 className='card-text'>{post.title}</h5>
                            <img className='card-img' src={post.image} alt={post.title} />
                            <div className="d-flex m-2">
                                <Link to={`/post/${post.id}`} className='btn btn-dark col'>View</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={`${classes.sticky__pagg}`}>
                <ReactPaginate className={`${classes.btn__group} btn-group-vertical`} role="group" aria-label="Vertical radio toggle button group"
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={changePage}
                    containerClassName={`${classes.sticky__pagg} pagination`}
                    pageClassName={"page-item "}
                    pageLinkClassName={"page-link bg-dark text-white"}
                    previousClassName={"page-item "}
                    previousLinkClassName={"page-link bg-dark text-white"}
                    nextClassName={"page-item "}
                    nextLinkClassName={"page-link bg-dark text-white"}
                    breakClassName={"page-item "}
                    breakLinkClassName={"page-link text-white bg-dark"}
                    activeClassName={"active "}
                />
                </div>
              
            </section>
        </>
    );
}
export default Home;
