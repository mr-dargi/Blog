// Cart Component 
export default function BlogCard(props) {
  console.log(props)
  const dateTime = new Date(props.blog.updated_at)
  // Create card with react bootstrap 
  return (
          <div className="col-lg-6">
            <article className="d-flex flex-column">

              <div className="post-img">
                <img src={ props.blog.photo_url } alt="" className="img-fluid" />
              </div>

              <h2 className="title">
                <a href="blog-details.html">
                  { props.blog.titile }
                </a>
              </h2>

              <div className="meta-top">
                <ul>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-person"></i> 
                    <a href="blog-details.html">John Doe</a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-clock"></i> 
                    <a href="blog-details.html">
                      <time>{ dateTime.toDateString() }</time>
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-chat-dots"></i> 
                    <a href="blog-details.html">12 Comments</a>
                  </li>
                </ul>
              </div>

              <div className="content">
                <p>
                  { props.blog.description }
                </p>
              </div>

              <div className="read-more mt-auto align-self-end">
                <a href="blog-details.html">Read More</a>
              </div>

            </article>
          </div>
  );
}