import React, { Component } from 'react'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import FormFields from '../components/FormFields/FormFields';
import "./CreatePost.scss"

export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            body: '',
        }
        this.htmlBody = React.createRef();
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };


    render() {
        const { editorState } = this.state;
        return (
            <div className="container--block">
                <div>
                    <form>
                        <h2>MAKE NEW BLOG POST</h2>
                        <div>
                            <FormFields
                                className="form__field " placeholder="Blog title" />
                            <FormFields
                                className="form__field " placeholder="SEO URL" />
                        </div>

                        <div className="form__flex">
                            <FormFields className="form__flext--3" placeholder="SEO Tags" />
                            <FormFields className="form__flext--3" placeholder="Bucket folder" />
                            <FormFields className="form__flext--3" placeholder="Category" />
                        </div>

                        <FormFields textLabel="Published" type="checkbox" placeholder="Published" />
                        <FormFields className="form__field "
                            placeholder="SEO Description" />

                        <Editor
                            editorState={editorState}
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                            onEditorStateChange={this.onEditorStateChange}
                        />
                        <textarea
                            disabled
                            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                            ref={this.htmlBody}
                        />

                        <button
                            type="submit"
                            disabled={this.props.pristine || this.props.submitting}>
                            Make Post
                </button>
                    </form>
                </div>
            </div>
        )
    }
}
