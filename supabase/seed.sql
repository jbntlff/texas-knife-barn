SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- \restrict Tsma1D5TZ0uzT8gwfkB71TfNeCcfck2z4UzwxGAKA8oAtxKiYXeId9qTwd7NZaE

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
	('3aa4e5c1-f8d7-45a2-b02a-6a9d2977b5f6', '55555555-5555-5555-5555-555555555560', 'SP-DELICA4', 'Blue FRN', 99.99, 119.99, true, '2026-06-02 23:17:44.088146+00'),
	('51b49b6a-2e36-4b9e-8fdd-5b293e33b28f', '55555555-5555-5555-5555-555555555557', 'BM-MINI-GRIP-ODG', 'OD Green Handle', 149.99, 169.99, true, '2026-06-05 00:06:06.545757+00'),
	('c404e4c5-ff5f-467b-8c69-f0dc79055d8b', '55555555-5555-5555-5555-555555555557', 'BM-MINI-GRIP-ORG', 'Orange Handle', 149.99, 169.99, true, '2026-06-05 00:06:06.545757+00');


--
-- Data for Name: inventory; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."inventory" ("variant_id", "quantity", "low_stock_threshold", "updated_at") VALUES
	('66666666-6666-6666-6666-666666666666', 12, 2, '2026-05-29 01:48:41.475377+00');


--
-- Data for Name: product_attributes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."product_attributes" ("id", "product_id", "attribute_name", "attribute_value", "sort_order", "created_at") VALUES
	('59aee655-5c21-473e-aee1-8c72082ea404', '55555555-5555-5555-5555-555555555560', 'Blade Length', '3.10"', 0, '2026-06-04 23:47:42.653238+00'),
	('827f0612-ac5c-4935-957a-67d4ab23b04d', '55555555-5555-5555-5555-555555555560', 'Blade Steel', 'Damascus GorGon', 1, '2026-06-04 23:47:42.653238+00'),
	('85fb12a7-dfd2-4882-a993-882b48a3fe8a', '55555555-5555-5555-5555-555555555560', 'Handle Material', 'Mamoth Tusk/Titanium', 2, '2026-06-04 23:47:42.653238+00'),
	('36f5a650-68ff-41d8-a5a7-e77cbf0f7fc5', '55555555-5555-5555-5555-555555555560', 'Weight', '2.90 oz', 3, '2026-06-04 23:47:42.653238+00'),
	('96b73fe9-98fa-44ed-a3ca-6539399b42a3', '55555555-5555-5555-5555-555555555560', 'Lock Type', 'Liner Lock', 4, '2026-06-04 23:47:42.653238+00'),
	('4ed40842-6ffd-4495-aa69-9dbde6b33b52', '55555555-5555-5555-5555-555555555560', 'Country', 'USA', 5, '2026-06-04 23:47:42.653238+00'),
	('c8264c69-6130-4b89-a03b-853b6e821796', '55555555-5555-5555-5555-555555555555', 'Blade Length', '3.24"', 0, '2026-06-04 23:48:03.824084+00'),
	('0ebc2cd0-3fdf-4799-ae9d-76cb6f7cf29a', '55555555-5555-5555-5555-555555555555', 'Blade Steel', 'CPM-S30V', 1, '2026-06-04 23:48:03.824084+00'),
	('e8c5a1ac-773c-4198-bcfa-9855726ad368', '55555555-5555-5555-5555-555555555555', 'Handle Material', 'Grivory', 2, '2026-06-04 23:48:03.824084+00'),
	('cd25666c-3d4d-4839-8cbe-8586daec573e', '55555555-5555-5555-5555-555555555555', 'Weight', '1.85 oz', 3, '2026-06-04 23:48:03.824084+00'),
	('046e77ef-e925-42cf-8f72-4e2c24bd1f8c', '55555555-5555-5555-5555-555555555555', 'Lock Type', 'AXIS Lock', 4, '2026-06-04 23:48:03.824084+00'),
	('df6c294b-56e2-45bc-bb16-bf45b4960562', '55555555-5555-5555-5555-555555555555', 'Country', 'USA', 5, '2026-06-04 23:48:03.824084+00'),
	('acdc966d-75fd-48c0-8b84-c25051672144', '55555555-5555-5555-5555-555555555559', 'Blade Length', '3.44"', 0, '2026-06-04 23:48:56.381685+00'),
	('e4c30778-ba1e-40fe-b303-904936eb9fea', '55555555-5555-5555-5555-555555555559', 'Blade Steel', 'CPM-S45VN', 1, '2026-06-04 23:48:56.381685+00'),
	('14e0310f-3c2c-4f0a-aa1b-7e6dc7de0285', '55555555-5555-5555-5555-555555555559', 'Handle Material', 'G10', 2, '2026-06-04 23:48:56.381685+00'),
	('91cfbb95-aace-4647-8f2f-47eac64fd961', '55555555-5555-5555-5555-555555555559', 'Weight', '3.75 oz', 3, '2026-06-04 23:48:56.381685+00'),
	('bc9e90e4-fabf-4132-a948-31757eec3d14', '55555555-5555-5555-5555-555555555559', 'Lock Type', 'Compression Lock', 4, '2026-06-04 23:48:56.381685+00'),
	('c1c039ce-cc1c-4b3a-86e5-c715fb9cc356', '55555555-5555-5555-5555-555555555559', 'Country', 'USA', 5, '2026-06-04 23:48:56.381685+00'),
	('c00b97d7-ac0e-4ac8-80cc-4c24fbd5b4b1', '55555555-5555-5555-5555-555555555556', 'Blade Length', '3.40"', 0, '2026-06-05 00:35:27.252945+00'),
	('f029a278-be5b-4d90-ba51-86225cbd642a', '55555555-5555-5555-5555-555555555556', 'Blade Steel', 'CPM-S30V', 1, '2026-06-05 00:35:27.252945+00'),
	('d8f23cbf-9a9c-430a-b38a-c8f04e6e3b2d', '55555555-5555-5555-5555-555555555556', 'Handle Material', '6061-T6 Aluminum', 2, '2026-06-05 00:35:27.252945+00'),
	('a41fb2d8-975d-4ce4-ba7f-d4322e7eccd6', '55555555-5555-5555-5555-555555555556', 'Weight', '2.90 oz', 3, '2026-06-05 00:35:27.252945+00'),
	('9a7fb9fb-d50b-4a47-b6e6-446fcd322030', '55555555-5555-5555-5555-555555555556', 'Lock Type', 'AXIS Lock', 4, '2026-06-05 00:35:27.252945+00'),
	('02ba7385-617b-4e14-9df8-c9752eb78793', '55555555-5555-5555-5555-555555555556', 'Country', 'USA', 5, '2026-06-05 00:35:27.252945+00'),
	('7ec8481a-196c-4429-9d0b-ab3fcc60df10', '55555555-5555-5555-5555-555555555557', 'Blade Length', '2.91"', 0, '2026-06-05 00:35:46.111496+00'),
	('a9f070e5-3dc7-41fa-8415-678a090cb08b', '55555555-5555-5555-5555-555555555557', 'Blade Steel', 'CPM-S30V', 1, '2026-06-05 00:35:46.111496+00'),
	('d1f078a5-74db-4b0d-a3f4-a719128a4cad', '55555555-5555-5555-5555-555555555557', 'Handle Material', 'Noryl GTX', 2, '2026-06-05 00:35:46.111496+00'),
	('59fc9b03-1bc4-4ca8-8860-fe9925a3b54e', '55555555-5555-5555-5555-555555555557', 'Weight', '2.56 oz', 3, '2026-06-05 00:35:46.111496+00'),
	('a7959469-ba6b-4cf0-8ede-8291c3510a31', '55555555-5555-5555-5555-555555555557', 'Lock Type', 'Liner Lock', 4, '2026-06-05 00:35:46.111496+00'),
	('0496226c-ded9-4e9e-8c6c-1c58c2a8d97c', '55555555-5555-5555-5555-555555555557', 'Country', 'USA', 5, '2026-06-05 00:35:46.111496+00'),
	('0d9817f4-253d-425e-a41c-5d3e97c85e44', '55555555-5555-5555-5555-555555555558', 'Blade Length', '2.93"', 0, '2026-06-05 00:36:11.250823+00'),
	('c02c3728-f37b-4281-a035-24bb43447590', '55555555-5555-5555-5555-555555555558', 'Blade Steel', 'CPM-S45VN', 1, '2026-06-05 00:36:11.250823+00'),
	('dac10102-118a-42fc-a4ba-72c0c6bfcb06', '55555555-5555-5555-5555-555555555558', 'Handle Material', 'G10', 2, '2026-06-05 00:36:11.250823+00'),
	('c26c280c-6b9c-427b-b2d3-a712e8c0e3c3', '55555555-5555-5555-5555-555555555558', 'Weight', '3.40 oz', 3, '2026-06-05 00:36:11.250823+00'),
	('401602b2-0951-495c-817e-75de3b112e25', '55555555-5555-5555-5555-555555555558', 'Lock Type', 'Compression Lock', 4, '2026-06-05 00:36:11.250823+00'),
	('a1b03f99-e78c-49d0-828f-7ffaac3f326a', '55555555-5555-5555-5555-555555555558', 'Country', 'USA', 5, '2026-06-05 00:36:11.250823+00');


--
-- Data for Name: product_images; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."product_images" ("id", "product_id", "image_url", "alt_text", "sort_order", "created_at") VALUES
	('559b2564-b296-44ad-a7c3-713f2cae3a5c', '55555555-5555-5555-5555-555555555555', '/images/products/bugout-1.jpg', 'Benchmade Bugout Open', 0, '2026-06-03 03:52:09.224951+00'),
	('f9592b7a-fcf4-443c-a3e7-c45430d48abe', '55555555-5555-5555-5555-555555555555', '/images/products/bugout-1-closed.jpg', 'Benchmade Bugout Closed', 1, '2026-06-03 03:52:09.224951+00'),
	('1bbb903b-4b81-47b0-9490-f737c7b3fd3f', '55555555-5555-5555-5555-555555555556', '/images/products/osborne-940-1.jpg', 'Benchmade Osborne 940 Open', 0, '2026-06-03 04:00:45.870925+00'),
	('4ded6b9b-aeb5-44fe-9081-a2edc7ba2687', '55555555-5555-5555-5555-555555555556', '/images/products/osborne-940-2.jpg', 'Benchmade Osborne 940 Closed', 1, '2026-06-03 04:00:45.870925+00'),
	('a1eac4c3-f154-4ced-adda-a051598a090a', '55555555-5555-5555-5555-555555555557', '/images/products/BM-Mini-Griptilian-1.jpg', 'Benchmade Mini Griptilian Open', 0, '2026-06-03 08:05:06.731794+00'),
	('bf922a36-c3f6-4c3a-a89a-89ef00c13094', '55555555-5555-5555-5555-555555555557', '/images/products/BM-Mini-Griptilian-2.jpg', 'Benchmade Mini Griptilian Closed', 1, '2026-06-03 08:05:06.731794+00'),
	('372deae9-9909-4a9a-884d-38382d535e17', '55555555-5555-5555-5555-555555555559', '/images/products/spyderco-para2-1.jpg', 'Spyderco Paramilary 2 Open', 0, '2026-06-04 23:49:10.69458+00'),
	('54803951-8c2b-4ee8-862c-db5b7d82f883', '55555555-5555-5555-5555-555555555559', '/images/products/spyderco-para2-2.jpg', 'Spyderco Paramilary 2 Closed', 1, '2026-06-04 23:49:10.69458+00'),
	('ea7eccb2-cd1a-4d21-b240-f9a773d6476b', '55555555-5555-5555-5555-555555555558', '/images/products/spyderco-para-3-1.jpg', 'Spyderco Para 3 Open', 0, '2026-06-04 23:50:28.935065+00'),
	('9e8ecd64-a1c1-4494-a069-4fcffee5a5d7', '55555555-5555-5555-5555-555555555558', '/images/products/spyderco-para-3-2.jpg', 'Spyderco Para 3 Closed', 1, '2026-06-04 23:50:28.935065+00'),
	('9df008be-0127-47a5-966c-4095827d18be', '55555555-5555-5555-5555-555555555558', '/images/products/spyderco-para-3-3.jpg', 'Spyderco Para 3 Closed', 1, '2026-06-04 23:50:28.935065+00'),
	('9fb9b392-deee-4367-bd60-f33d279f1e49', '55555555-5555-5555-5555-555555555560', '/images/products/paratropper-elegante.jpg', 'Milinski Paratropper Elegante Open', 0, '2026-06-04 23:52:02.47048+00');


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
	('cf85c3d4-af31-4832-a217-a0d747b6ef58', '3b0dbef4-f497-4c1d-b15b-9de6aec22c31', 'Blade Finish', 'Satin', '2026-06-03 09:25:30.321086+00'),
	('1c3edb3b-6c86-4a29-8b86-c5135a2aeb9d', '51b49b6a-2e36-4b9e-8fdd-5b293e33b28f', 'Handle Color', 'OD Green', '2026-06-05 00:06:26.254241+00'),
	('406feddb-b575-47d8-a472-ffc0c3bbf8ab', '51b49b6a-2e36-4b9e-8fdd-5b293e33b28f', 'Blade Finish', 'Satin', '2026-06-05 00:06:26.254241+00'),
	('52c09993-2df8-449d-bd70-71b072a036fb', 'c404e4c5-ff5f-467b-8c69-f0dc79055d8b', 'Handle Color', 'Orange', '2026-06-05 00:06:26.254241+00'),
	('c3a07277-3047-49f4-be8f-d8a295e40273', 'c404e4c5-ff5f-467b-8c69-f0dc79055d8b', 'Blade Finish', 'Satin', '2026-06-05 00:06:26.254241+00');


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

-- \unrestrict Tsma1D5TZ0uzT8gwfkB71TfNeCcfck2z4UzwxGAKA8oAtxKiYXeId9qTwd7NZaE

RESET ALL;
