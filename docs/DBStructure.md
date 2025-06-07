# 데이터베이스 구조

## projects 테이블

### 주요 컬럼

-   `id` (uuid, primary key, default: gen_random_uuid())
-   `title` (varchar, not null)
-   `description` (text, not null)
-   `thumbnail` (varchar, not null)
-   `tech_stack` (text[], not null, default: '{}')
-   `repo_url` (varchar, null)
-   `demo_url` (varchar, null)
-   `markdown_content` (text, null)
-   `cover_image_url` (text, null)
-   `cover_color` (text, null)
-   `gallery_images` (jsonb, null, default: '[]')
-   `related_links` (jsonb, null, default: '[]')
-   `role` (text, not null, default: 'solo', check: ['solo', 'team'])
-   `period_start` (date, not null, default: CURRENT_DATE)
-   `period_end` (date, not null, default: CURRENT_DATE)
-   `created_at` (timestamptz, null, default: now())
-   `updated_at` (timestamptz, null, default: now())

## education 테이블

### 주요 컬럼

-   `id` (uuid, primary key, default: gen_random_uuid())
-   `title` (varchar, not null)
-   `institution` (varchar, not null)
-   `description` (text, not null)
-   `start_period` (varchar, not null)
-   `end_period` (varchar, not null)
-   `tags` (text[], not null, default: '{}')
-   `created_at` (timestamptz, null, default: now())
-   `updated_at` (timestamptz, null, default: now())
