import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Post.module.css';
import { Link } from 'react-router-dom';
import { FetchPosts } from '../../store/posts';


const Post = () => {
    const firstRef = useRef(null);
    const { id } = useParams();
    const { posts } = useSelector((state) => state.posts)
    const postData = posts.record
    const currentPost = postData.find((pst) => pst.id === id)
    const [isActive, setActive] = useState("false");
    const [title, setTitle] = useState(currentPost.title)
    const [image, setImage] = useState(currentPost.image)
    const [newTitle, setNewTitle] = useState(title)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FetchPosts());
        setTitle(currentPost.title)
        setImage(currentPost.image)
    }, [id])
    let Next = Number(id) + 1
    let Previous = Number(id) - 1
    if (Next > postData.length) {
        Next = postData.length
    }
    if (Previous < 1) {
        Previous = 1
    }
    const titleChangeHandler = (e) => {
        e.preventDefault();
        setTitle(newTitle);
        firstRef.current.value = ''
    }
    const showFromHandler = (e) => {
        e.preventDefault();
        setActive(!isActive)
    }
    const inputChangeHandler = (e) => {
        setNewTitle(e.target.value);
    }

    return (
        <>
            <Navbar />
            <header className={classes.main}>
                <h2 className='display-1'>{title}</h2>
            </header>
            <main className="row">
                <aside className='order-last order-md-first row justify-content-between mt-1 m-0'>
                    <Link to={`/post/${Previous}`} className={`${classes.btn__move} btn btn-dark`}>Previous</Link>
                    <Link to={`/post/${Next}`} className={`${classes.btn__move} btn btn-dark`}>Next</Link>
                </aside>
                <section className='order-first order-md-last container'>
                    <section className='row justify-content-center'>
                        <div className={`${classes.cardBody} col-11 col-md-10 row rounded p-3`}>
                            <img className='col-12 col-md-9' src={image} alt={title} />
                            <div className='col-12 col-md-3'>
                                <div className={`${classes.title__box} mt-3 mt-md-0`}>
                                    <h2 className={`${classes.heading} col card-heading text-center bold display-2`}>TITLE </h2>
                                    <h3 className='col card-body text-center display-3'>{title}</h3>
                                </div>
                                <div className="row justify-content-center gap-1 mt-3">
                                    <div className="d-inline btn-group text-center">
                                        <button onClick={showFromHandler} type='button' className='btn btn-success w-50'>Edit</button>
                                        <button className='btn btn-danger w-50'>Delete</button>
                                    </div>
                                    <form onSubmit={titleChangeHandler} className={`${classes.title__change} mt-4 ${isActive ? "d-none" : ""}`}>
                                        <h4>Enter New Title</h4>
                                        <input className={`${classes.title__input} w-100`} ref={firstRef} type="text" onChange={inputChangeHandler} />
                                        <button onSubmit={titleChangeHandler} className={`${classes.title__button} btn w-100 my-2`} type='submit'>CHANGE TITLE</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </>
    )

}
export default Post;
