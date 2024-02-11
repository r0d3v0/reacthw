import {useEffect, useState} from "react";
import {Post} from "./Post";
import {PostDetails} from "./PostDetails";
import {postServsises, postServsises as postService} from "../../servises/postServsises";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null);



    const getPostId = async (id) => {
        const {data} = await postServsises.getByID(id);
        setPostDetails(data)
    }
    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post} getPostId={getPostId  }/>)}
            <hr/>
            {postDetails&&<PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {Posts};