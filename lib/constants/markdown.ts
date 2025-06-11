export const MARKDOWN_COMPONENTS = {
    img: {
        className: 'w-full h-auto object-cover',
    },
    pre: {
        className: '!whitespace-pre-wrap !break-words !bg-gray-800 !text-white dark:!bg-gray-800 dark:!text-white',
    },
    code: {
        className: '!break-words !whitespace-pre-wrap !bg-gray-800 !text-white dark:!bg-gray-800 dark:!text-white',
    },
    p: {
        className: '!text-gray-700 dark:!text-gray-700',
    },
    h1: {
        className: '!text-gray-900 dark:!text-gray-900',
    },
    h2: {
        className: '!text-gray-900 dark:!text-gray-900',
    },
    h3: {
        className: '!text-gray-900 dark:!text-gray-900 !bg-gray-200/80 !block !px-2 !py-0.5 !rounded-xs !mb-4',
    },
    h4: {
        className: '!text-gray-900 dark:!text-gray-900',
    },
    h5: {
        className: '!text-gray-900 dark:!text-gray-900',
    },
    h6: {
        className: '!text-gray-900 dark:!text-gray-900',
    },
    ul: {
        className: '!text-gray-700 dark:!text-gray-700',
    },
    ol: {
        className: '!text-gray-700 dark:!text-gray-700',
    },
    li: {
        className: '!text-gray-700 dark:!text-gray-700',
    },
    blockquote: {
        className: '!text-gray-700 dark:!text-gray-700 !border-l-4 !border-gray-300',
    },
    table: {
        className: '!text-gray-700 dark:!text-gray-700',
    },
    th: {
        className: '!text-gray-900 dark:!text-gray-900 !bg-gray-100',
    },
    td: {
        className: '!text-gray-700 dark:!text-gray-700',
    },
} as const;
