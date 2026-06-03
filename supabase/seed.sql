SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- \restrict vrufpbDKefujQWAZy0HOH4iy13F6osLDDWiIRtndl30snPJzksUzoA33SFyGsth

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: custom_oauth_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_clients; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_authorizations; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_client_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_consents; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: webauthn_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: webauthn_credentials; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: brands; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."brands" ("id", "name", "slug", "created_at") VALUES
	('11111111-1111-1111-1111-111111111111', 'Benchmade', 'benchmade', '2026-05-29 01:48:41.475377+00'),
	('22222222-2222-2222-2222-222222222222', 'Spyderco', 'spyderco', '2026-05-29 01:48:41.475377+00');


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."categories" ("id", "name", "slug", "created_at") VALUES
	('33333333-3333-3333-3333-333333333333', 'EDC', 'edc', '2026-05-29 01:48:41.475377+00'),
	('44444444-4444-4444-4444-444444444444', 'Fixed Blade', 'fixed-blade', '2026-05-29 01:48:41.475377+00');


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."products" ("id", "brand_id", "category_id", "name", "slug", "short_description", "description", "status", "featured", "created_at", "updated_at") VALUES
	('55555555-5555-5555-5555-555555555555', '11111111-1111-1111-1111-111111111111', '33333333-3333-3333-3333-333333333333', 'Benchmade Bugout', 'benchmade-bugout', 'Lightweight EDC folding knife', 'The Benchmade Bugout is a lightweight everyday carry knife designed for versatility and durability.', 'active', true, '2026-05-29 01:48:41.475377+00', '2026-05-29 01:48:41.475377+00'),
	('55555555-5555-5555-5555-555555555556', '11111111-1111-1111-1111-111111111111', '33333333-3333-3333-3333-333333333333', 'Benchmade Osborne 940', 'benchmade-osborne-940', 'Legendary reverse tanto EDC knife', 'The Benchmade Osborne 940 is one of the most iconic everyday carry knives ever produced.', 'active', true, '2026-06-02 23:17:18.204463+00', '2026-06-02 23:17:18.204463+00'),
	('55555555-5555-5555-5555-555555555557', '11111111-1111-1111-1111-111111111111', '33333333-3333-3333-3333-333333333333', 'Benchmade Mini Griptilian', 'benchmade-mini-griptilian', 'Compact and reliable EDC folder', 'The Mini Griptilian delivers Benchmade quality in a compact everyday carry package.', 'active', true, '2026-06-02 23:17:18.204463+00', '2026-06-02 23:17:18.204463+00'),
	('55555555-5555-5555-5555-555555555558', '22222222-2222-2222-2222-222222222222', '33333333-3333-3333-3333-333333333333', 'Spyderco Para 3', 'spyderco-para-3', 'Compact high-performance EDC knife', 'The Para 3 combines excellent ergonomics with premium blade steel.', 'active', true, '2026-06-02 23:17:18.204463+00', '2026-06-02 23:17:18.204463+00'),
	('55555555-5555-5555-5555-555555555559', '22222222-2222-2222-2222-222222222222', '33333333-3333-3333-3333-333333333333', 'Spyderco Paramilitary 2', 'spyderco-paramilitary-2', 'One of the most respected EDC knives available', 'The PM2 is known for exceptional ergonomics and cutting performance.', 'active', true, '2026-06-02 23:17:18.204463+00', '2026-06-02 23:17:18.204463+00'),
	('55555555-5555-5555-5555-555555555560', '22222222-2222-2222-2222-222222222222', '33333333-3333-3333-3333-333333333333', 'Spyderco Delica 4', 'spyderco-delica-4', 'Lightweight and affordable EDC knife', 'The Delica 4 remains one of Spyderco’s most popular everyday carry knives.', 'active', true, '2026-06-02 23:17:18.204463+00', '2026-06-02 23:17:18.204463+00');


--
-- Data for Name: product_variants; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."product_variants" ("id", "product_id", "sku", "title", "price", "compare_at_price", "active", "created_at") VALUES
	('66666666-6666-6666-6666-666666666666', '55555555-5555-5555-5555-555555555555', 'BM-BUGOUT-BLK', 'Black Handle / Satin Blade', 179.99, 199.99, true, '2026-05-29 01:48:41.475377+00'),
	('22130637-171d-4f36-8f8c-b768356cf875', '55555555-5555-5555-5555-555555555556', 'BM-940-GRN', 'Green Aluminum Handle', 219.99, 249.99, true, '2026-06-02 23:17:44.088146+00'),
	('9cd4d47f-02eb-4a89-8309-36d0b28f2684', '55555555-5555-5555-5555-555555555557', 'BM-MINI-GRIP', 'Black Handle', 149.99, 169.99, true, '2026-06-02 23:17:44.088146+00'),
	('9b03100a-e508-466e-aa05-db1d23e7cc64', '55555555-5555-5555-5555-555555555558', 'SP-PARA3', 'Black G10', 169.99, 189.99, true, '2026-06-02 23:17:44.088146+00'),
	('3b0dbef4-f497-4c1d-b15b-9de6aec22c31', '55555555-5555-5555-5555-555555555559', 'SP-PM2', 'Black G10', 189.99, 209.99, true, '2026-06-02 23:17:44.088146+00'),
	('3aa4e5c1-f8d7-45a2-b02a-6a9d2977b5f6', '55555555-5555-5555-5555-555555555560', 'SP-DELICA4', 'Blue FRN', 99.99, 119.99, true, '2026-06-02 23:17:44.088146+00');


--
-- Data for Name: inventory; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."inventory" ("variant_id", "quantity", "low_stock_threshold", "updated_at") VALUES
	('66666666-6666-6666-6666-666666666666', 12, 2, '2026-05-29 01:48:41.475377+00');


--
-- Data for Name: product_images; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."product_images" ("id", "product_id", "image_url", "alt_text", "sort_order", "created_at") VALUES
	('ac8e9eb8-b021-4d53-8b5e-2cd7a9f8dac3', '55555555-5555-5555-5555-555555555558', 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d', 'Spyderco Para 3', 0, '2026-06-02 23:18:18.182488+00'),
	('778f99e4-e3f9-4eaa-b1da-08c13ead96e3', '55555555-5555-5555-5555-555555555559', 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d', 'Spyderco PM2', 0, '2026-06-02 23:18:18.182488+00'),
	('999b7c34-bd36-455f-9a5e-a2cb8b9ad826', '55555555-5555-5555-5555-555555555560', 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d', 'Spyderco Delica 4', 0, '2026-06-02 23:18:18.182488+00'),
	('559b2564-b296-44ad-a7c3-713f2cae3a5c', '55555555-5555-5555-5555-555555555555', '/images/products/bugout-1.jpg', 'Benchmade Bugout Open', 0, '2026-06-03 03:52:09.224951+00'),
	('f9592b7a-fcf4-443c-a3e7-c45430d48abe', '55555555-5555-5555-5555-555555555555', '/images/products/bugout-1-closed.jpg', 'Benchmade Bugout Closed', 1, '2026-06-03 03:52:09.224951+00'),
	('1bbb903b-4b81-47b0-9490-f737c7b3fd3f', '55555555-5555-5555-5555-555555555556', '/images/products/osborne-940-1.jpg', 'Benchmade Osborne 940 Open', 0, '2026-06-03 04:00:45.870925+00'),
	('4ded6b9b-aeb5-44fe-9081-a2edc7ba2687', '55555555-5555-5555-5555-555555555556', '/images/products/osborne-940-2.jpg', 'Benchmade Osborne 940 Closed', 1, '2026-06-03 04:00:45.870925+00'),
	('a1eac4c3-f154-4ced-adda-a051598a090a', '55555555-5555-5555-5555-555555555557', '/images/products/BM-Mini-Griptilian-1.jpg', 'Benchmade Mini Griptilian Open', 0, '2026-06-03 08:05:06.731794+00'),
	('bf922a36-c3f6-4c3a-a89a-89ef00c13094', '55555555-5555-5555-5555-555555555557', '/images/products/BM-Mini-Griptilian-2.jpg', 'Benchmade Mini Griptilian Closed', 1, '2026-06-03 08:05:06.731794+00');


--
-- Data for Name: variant_options; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."variant_options" ("id", "variant_id", "option_name", "option_value", "created_at") VALUES
	('5e18edab-1729-43fd-a6f1-ebcbfd7dab87', '9cd4d47f-02eb-4a89-8309-36d0b28f2684', 'Blade Finish', 'Satin', '2026-06-03 09:11:47.725023+00'),
	('7cc85128-45e5-45d9-b2b4-c6d8249956b2', '9cd4d47f-02eb-4a89-8309-36d0b28f2684', 'Handle Color', 'Black', '2026-06-03 09:11:47.725023+00'),
	('2f3ceb53-51e7-4322-a654-af62b34e786c', '22130637-171d-4f36-8f8c-b768356cf875', 'Handle Color', 'Green', '2026-06-03 09:22:46.098452+00'),
	('bf4e41cf-3e61-4670-9045-3bb7a8728c6b', '22130637-171d-4f36-8f8c-b768356cf875', 'Blade Finish', 'Satin', '2026-06-03 09:22:46.098452+00'),
	('9ed4532c-d931-4a6a-b337-1a69b18e3bf9', '66666666-6666-6666-6666-666666666666', 'Handle Color', 'Black', '2026-06-03 09:23:17.514106+00'),
	('36b42c46-1962-4796-bfb3-37a61c88b3dc', '66666666-6666-6666-6666-666666666666', 'Blade Finish', 'Black DLC', '2026-06-03 09:23:17.514106+00'),
	('5001e666-73b8-421e-923b-b83604f1ad5a', '3aa4e5c1-f8d7-45a2-b02a-6a9d2977b5f6', 'Handle Color', 'Blue', '2026-06-03 09:24:52.861489+00'),
	('b4e5aca7-fcf0-47ef-997a-8dece9cd3e75', '3aa4e5c1-f8d7-45a2-b02a-6a9d2977b5f6', 'Blade Finish', 'Satin', '2026-06-03 09:24:52.861489+00'),
	('7955c309-d852-4862-b317-cd41a46956c7', '9b03100a-e508-466e-aa05-db1d23e7cc64', 'Handle Color', 'Black', '2026-06-03 09:25:09.679134+00'),
	('1103b87c-01a8-4ca9-8a3c-d5e451f21e54', '9b03100a-e508-466e-aa05-db1d23e7cc64', 'Blade Finish', 'Satin', '2026-06-03 09:25:09.679134+00'),
	('296fda00-965c-48a0-9a48-6705c3f6dac8', '3b0dbef4-f497-4c1d-b15b-9de6aec22c31', 'Handle Color', 'Black', '2026-06-03 09:25:30.321086+00'),
	('cf85c3d4-af31-4832-a217-a0d747b6ef58', '3b0dbef4-f497-4c1d-b15b-9de6aec22c31', 'Blade Finish', 'Satin', '2026-06-03 09:25:30.321086+00');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: buckets_analytics; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: buckets_vectors; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: iceberg_namespaces; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: iceberg_tables; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: vector_indexes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, false);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

-- \unrestrict vrufpbDKefujQWAZy0HOH4iy13F6osLDDWiIRtndl30snPJzksUzoA33SFyGsth

RESET ALL;
