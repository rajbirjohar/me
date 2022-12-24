BEGIN
    IF EXISTS (SELECT FROM analytics WHERE slug=page_slug) THEN
        UPDATE analytics
        SET views = views + 1,
            updated_at = now()
        WHERE slug = page_slug;
    ELSE
        INSERT into analytics(slug) VALUES (page_slug);
    END IF;
END;