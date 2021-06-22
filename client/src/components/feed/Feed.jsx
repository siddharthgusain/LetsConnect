import { useEffect , useState } from 'react';
import './feed.css';
import Share from '../share/Share';
import Post from '../posts/Post';
import axios from 'axios';

export default function Feed() {

    const [posts , setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () =>{
            
            const res =  await axios.get("posts/timeline/60ca50a46b3d506b2d48d793");
            setPosts(res.data);
        }
        
        fetchPosts();
    },[]);



    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
            
                { 
                
                posts.map((p) => (
                    <Post key = {p._id} post = {p} />
                ))
                
                }
                
            </div>
        </div>
    )
}
