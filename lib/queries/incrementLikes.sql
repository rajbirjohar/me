BEGIN
    IF EXISTS (SELECT FROM likes WHERE slug = page_slug AND userid = user_id) THEN
        UPDATE likes
        SET user_likes = user_likes + 1,
            updated_at = now()
        WHERE slug = page_slug; 
    ELSE
        INSERT into likes (slug, userid) VALUES (page_slug, user_id);
    END IF;

    IF EXISTS (SELECT FROM analytics WHERE slug = page_slug) THEN
        UPDATE analytics
        SET likes = likes + 1, 
        updated_at = now()
        WHERE slug = page_slug;
        END IF;
END;

