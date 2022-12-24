BEGIN
    IF EXISTS (SELECT FROM likes WHERE slug = page_slug AND userid = user_id) THEN
        UPDATE likes
        SET user_likes = user_likes + 1,
            updated_at = now()
        WHERE slug = page_slug AND userid = user_id AND user_likes < 11; 
    ELSE
        INSERT into likes(slug, userid) VALUES (page_slug, user_id);
    END IF;

    UPDATE analytics
    SET likes = likes + 1, 
    updated_at = now()
    WHERE slug = page_slug;
END;

