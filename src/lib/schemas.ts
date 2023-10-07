export type Post = {
    id: string;
    subtitle: string;
    title: string;
    authors: string[];
    created: number;
    status: 'confirmed' | 'draft' | 'archived'; // Update with possible status values
    publish_date: number;
    displayed_date: number;
    split_tested: boolean;
    subject_line: string;
    preview_text: string;
    slug: string;
    thumbnail_url: string;
    web_url: string;
    audience: 'free' | 'premium'; // Update with possible audience values
    platform: 'web' | 'email' | 'rss'; // Update with possible platform values
    content_tags: string[];
    content: {
        free: {
            web: string;
            email: string;
            rss: string;
        };
        premium?: {
            web: string;
            email: string;
        };
    };
    stats: {
        email: {
            recipients: number;
            opens: number;
            unique_opens: number;
            open_rate: number;
            clicks: number;
            unique_clicks: number;
            click_rate: number;
            unsubscribes: number;
            spam_reports: number;
        };
        web: {
            views: number;
            clicks: number;
        };
        clicks: {
            url: string;
            email: {
                clicks: number;
                unique_clicks: number;
                click_through_rate: number;
            };
            web: {
                clicks: number;
                unique_clicks: number;
                click_through_rate: number;
            };
            total_clicks: number;
            total_unique_clicks: number;
            total_click_through_rate: number;
        }[];
    };
}

export type PostResponse = {
    data: Post[];
    limit: number;
    page: number;
    total_results: number;
    total_pages: number;
}