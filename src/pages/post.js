import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Post = () => (
    <Layout>
        <h1>NEW PAGE</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default Post
