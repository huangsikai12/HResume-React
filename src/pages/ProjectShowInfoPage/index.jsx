import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router";
import ReactMarkdown from 'react-markdown';

import rehypeRaw from 'rehype-raw';
import gfm from 'remark-gfm';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { androidstudio} from 'react-syntax-highlighter/dist/esm/styles/hljs';



function ProjectInfo(props) {

    const [search] = useSearchParams()

    return (
        <div>
            项目简介
            {search.get("p")}
            <MarkdownViewer filePath="/test.md" />

        </div>
    );
}

async function loadMarkdownFile(filePath) {
    const response = await fetch(filePath);
    return await response.text();
}




// eslint-disable-next-line react/prop-types
function MarkdownViewer({ filePath }) {
    const [markdownText, setMarkdownText] = useState('');

    useEffect(() => {
        loadMarkdownFile(filePath).then(setMarkdownText);
    }, [filePath]);

    return (
        <div className="markdown-viewer">
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[gfm]}
                components={CodeBlock}

            >{markdownText}</ReactMarkdown>
        </div>
    );
}
export default ProjectInfo;


const CodeBlock = {


    code({ inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
            <SyntaxHighlighter
                showLineNumbers
                children={String(children).replace(/\n$/, '')}
                style={androidstudio} // theme
                language={match[1].toLowerCase()}
                PreTag="section" // parent tag
                {...props}
            />
        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        );
    },

}



