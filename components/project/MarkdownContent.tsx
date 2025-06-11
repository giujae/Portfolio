import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MarkdownContentProps } from '@/lib/types/project';

export default function MarkdownContent({ content }: MarkdownContentProps) {
    if (!content) {
        return <p className="!text-gray-500 dark:!text-gray-500">상세 내용이 없습니다.</p>;
    }

    return (
        <div className="prose prose-sm w-full max-w-full [&_pre]:!whitespace-pre-wrap [&_pre]:break-words [&_img]:w-full [&_table]:w-full [&_table]:block [&_table]:overflow-x-auto !text-gray-900 dark:!text-gray-900">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    img: (props) => <img {...props} className="w-full h-auto object-cover" />,
                    pre: (props) => (
                        <pre
                            {...props}
                            className="!whitespace-pre-wrap !break-words !bg-gray-800 !text-white dark:!bg-gray-800 dark:!text-white"
                        />
                    ),
                    code: (props) => (
                        <code
                            {...props}
                            className="!break-words !whitespace-pre-wrap !bg-gray-800 !text-white dark:!bg-gray-800 dark:!text-white"
                        />
                    ),
                    p: (props) => <p {...props} className="!text-gray-700 dark:!text-gray-700" />,
                    h1: (props) => <h1 {...props} className="!text-gray-900 dark:!text-gray-900" />,
                    h2: (props) => <h2 {...props} className="!text-gray-900 dark:!text-gray-900" />,
                    h3: (props) => (
                        <h3
                            {...props}
                            className="!text-gray-900 dark:!text-gray-900 !bg-gray-200/80 !block !px-2 !py-0.5 !rounded-xs !mb-4"
                        />
                    ),
                    h4: (props) => <h4 {...props} className="!text-gray-900 dark:!text-gray-900" />,
                    h5: (props) => <h5 {...props} className="!text-gray-900 dark:!text-gray-900" />,
                    h6: (props) => <h6 {...props} className="!text-gray-900 dark:!text-gray-900" />,
                    ul: (props) => <ul {...props} className="!text-gray-700 dark:!text-gray-700" />,
                    ol: (props) => <ol {...props} className="!text-gray-700 dark:!text-gray-700" />,
                    li: (props) => <li {...props} className="!text-gray-700 dark:!text-gray-700" />,
                    blockquote: (props) => (
                        <blockquote
                            {...props}
                            className="!text-gray-700 dark:!text-gray-700 !border-l-4 !border-gray-300"
                        />
                    ),
                    table: (props) => <table {...props} className="!text-gray-700 dark:!text-gray-700" />,
                    th: (props) => <th {...props} className="!text-gray-900 dark:!text-gray-900 !bg-gray-100" />,
                    td: (props) => <td {...props} className="!text-gray-700 dark:!text-gray-700" />,
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
