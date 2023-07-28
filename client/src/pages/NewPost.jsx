import { Form } from "react-router-dom";
import { FormGroup } from "../components/FormGroup";

function NewPost() {
    const users = useLoaderData()
  return (
    <>
      <h1 className="page-title">New Post</h1>
      <Form method="post" classNam="form">
        <div className="form-row">
          <FormGroup>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="userId">Author</label>
            <select name="userId" id="userId"></select>
          </FormGroup>
        </div>
        <div className="form-row">
          <FormGroup>
            <div className="form-group">
              <label htmlFor="body">Body</label>
              <textarea name="body" id="body"></textarea>
            </div>
          </FormGroup>
        </div>
        <div className="form-row form-btn-row">
          <a className="btn btn-outline" href="/posts">
            Cancel
          </a>
          <button className="btn">Save</button>
        </div>
      </Form>
    </>
  );
}

function loader({ request: { signal }}) {
    return getUsers({ signal })
}

export const newPostRoute = {
    loader,
  element: <NewPost />,
};
