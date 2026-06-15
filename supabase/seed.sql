SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- \restrict qqsI1IR26F9WblFw8Ov7RscKTpydnQyH6WeSqshmqgEVv6Xjq9EEYcIW8ZkciRE

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

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '74c119ae-7ac2-4a23-8e15-e25a1170fa6c', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"provider":"email","user_email":"joel@texasknifebarn.com","user_id":"44c2c92e-354d-40e9-93a0-33173158bb78","user_phone":""}}', '2026-06-12 23:48:17.117519+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cfec35c1-e2f8-4045-8d34-dc94bb397327', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"provider":"email","user_email":"admin@texasknifebarn.local","user_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","user_phone":""}}', '2026-06-13 00:36:41.960224+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a4761aee-d1ee-4897-9b0b-6cf92184c04d', '{"action":"login","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2026-06-13 00:49:25.566556+00', ''),
	('00000000-0000-0000-0000-000000000000', '4c37b97e-c85a-432a-9896-7c89831a40c4', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-13 01:48:43.443467+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bf4c116b-7cb5-43fb-a2d1-b6b59b78fa09', '{"action":"token_revoked","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-13 01:48:43.444968+00', ''),
	('00000000-0000-0000-0000-000000000000', '888ddb72-094f-4785-970f-9eadcbcbcd7a', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-13 10:40:18.568308+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e1dd9827-3689-4793-b719-cf1dab300eea', '{"action":"token_revoked","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-13 10:40:18.568973+00', ''),
	('00000000-0000-0000-0000-000000000000', '49513113-15f5-4ebc-a23a-e62037b8696b', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-13 23:12:29.301996+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e54cc1d4-9a12-46d5-940a-e6a5dc531020', '{"action":"token_revoked","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-13 23:12:29.302567+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ddcfab64-fcf9-434b-9795-e6e3f09b4403', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 00:13:31.641733+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a2c71275-1077-4303-9d64-e22c61540581', '{"action":"token_revoked","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 00:13:31.642355+00', ''),
	('00000000-0000-0000-0000-000000000000', '40326088-02e5-4a04-bc5f-8f5fa1e93b97', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 01:38:14.652781+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cff41c42-e239-4cdc-b0bf-f51b8409bb8a', '{"action":"token_revoked","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 01:38:14.653577+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c066d8b6-187e-4aab-8ea6-5db00d92056e', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 01:38:14.666012+00', ''),
	('00000000-0000-0000-0000-000000000000', '755c63eb-82b5-4cf4-95bd-e3b8200e1fa8', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 01:38:14.754079+00', ''),
	('00000000-0000-0000-0000-000000000000', '778ddf99-6945-4ec1-9f0b-039bfd589d91', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 01:38:14.761122+00', ''),
	('00000000-0000-0000-0000-000000000000', '64bf1dc0-93e8-4ca6-872a-4b6728310a92', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 01:38:14.807573+00', ''),
	('00000000-0000-0000-0000-000000000000', '791265ea-064d-49d1-a79f-c020ec2135d3', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 01:38:14.817155+00', ''),
	('00000000-0000-0000-0000-000000000000', '99de33eb-8b24-4b1d-83b9-b898523b7487', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 01:38:14.887268+00', ''),
	('00000000-0000-0000-0000-000000000000', '5931bbe8-5220-40a3-8910-845e1469016d', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 01:38:15.111387+00', ''),
	('00000000-0000-0000-0000-000000000000', '4a92a404-70bd-421d-825f-dc92048a1211', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 01:38:15.601488+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b8fb0341-8ddd-4a93-a64d-187db33234ba', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 01:38:15.612035+00', ''),
	('00000000-0000-0000-0000-000000000000', '815a9f8e-5b06-45b2-add7-8c05f4e597e6', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 11:54:03.467009+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ebdb6203-da2f-4722-9579-8f078ed8bc8d', '{"action":"token_revoked","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 11:54:03.467589+00', ''),
	('00000000-0000-0000-0000-000000000000', '47370c7b-c202-4153-8ac6-2bf073509da4', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 21:24:16.895468+00', ''),
	('00000000-0000-0000-0000-000000000000', '0eb7b75e-f5a7-4003-820d-2fa4098f2865', '{"action":"token_revoked","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 21:24:16.896095+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ff184e50-b71e-4f36-aeba-b6abd443461a', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 22:25:27.991617+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a3687182-7e80-4aad-9ddc-9de5cf813ad6', '{"action":"token_revoked","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 22:25:27.992246+00', ''),
	('00000000-0000-0000-0000-000000000000', '6701d163-c892-434f-b4ba-2d82d3f1d380', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 22:25:28.131186+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aa939ca8-cd0e-45ee-b852-f95d1110e4f5', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 22:25:28.249919+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd948456e-2518-4b42-937d-138b04dc57b7', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 23:48:54.336207+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a71e6081-b645-43e5-b877-3620ab9c4081', '{"action":"token_revoked","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-14 23:48:54.336717+00', ''),
	('00000000-0000-0000-0000-000000000000', '53362f14-ab74-4fb5-94ba-ca46bdd6be0d', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 00:52:25.770071+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e6c84a28-233b-4ef0-9c16-d44f7f68c6c0', '{"action":"token_revoked","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 00:52:25.770535+00', ''),
	('00000000-0000-0000-0000-000000000000', '15f81df4-a6b0-42a7-9811-990b0acbc4d7', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 01:56:10.738644+00', ''),
	('00000000-0000-0000-0000-000000000000', 'be37c30f-e136-4b14-b74e-f9aeb50f5018', '{"action":"token_revoked","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 01:56:10.739262+00', ''),
	('00000000-0000-0000-0000-000000000000', 'daff2e6d-1834-4746-827e-e82f45632824', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 01:56:10.887753+00', ''),
	('00000000-0000-0000-0000-000000000000', '0b306385-3c12-4c93-9a93-fa1d6235ca9a', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 01:56:11.030504+00', ''),
	('00000000-0000-0000-0000-000000000000', '01a01e3d-eb7d-4d43-bcc8-d2207a763ce4', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 01:56:11.168229+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e292b7c3-291d-45f2-9cb2-adcc376e8562', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 01:56:11.316064+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a52d5365-2b3b-47e9-9407-d02d086a07b3', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 01:56:11.430654+00', ''),
	('00000000-0000-0000-0000-000000000000', '0be022f8-cfad-4822-a308-faff3d376c54', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 01:56:11.542867+00', ''),
	('00000000-0000-0000-0000-000000000000', 'edab7af6-8c5f-49c9-a1a7-e28a1c95dced', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 01:56:11.655286+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b72d2026-2a01-4d83-a767-493b691edc0a', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 01:56:11.776119+00', ''),
	('00000000-0000-0000-0000-000000000000', '07dd8c0f-3eab-439b-b9e4-4af5fb0dbe80', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 01:56:11.898844+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dc7a7dbc-5608-43d4-8807-86db9e6b1380', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 01:56:12.096557+00', ''),
	('00000000-0000-0000-0000-000000000000', '48f9b736-1b29-4c9d-aa61-400966f59df5', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 10:01:42.928314+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f19e1b83-63ed-4d42-aec7-2b528ce82cc1', '{"action":"token_revoked","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 10:01:42.929067+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c2183643-7afe-4932-ac84-596c6946b4ea', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 12:27:14.634085+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e8cbc087-4b80-4ddc-86d2-35057d14906d', '{"action":"token_revoked","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 12:27:14.634578+00', ''),
	('00000000-0000-0000-0000-000000000000', '58b75aee-7bd4-437c-a485-eb94aa8ea376', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 14:31:54.773392+00', ''),
	('00000000-0000-0000-0000-000000000000', '44b7a528-fd7f-47a9-9dcd-c752c3af9d35', '{"action":"token_revoked","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 14:31:54.774064+00', ''),
	('00000000-0000-0000-0000-000000000000', '9d459494-b8b0-49c1-b249-4bf316437212', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 16:02:16.561921+00', ''),
	('00000000-0000-0000-0000-000000000000', '5374b6ab-b745-4e85-9c5d-1332e8726711', '{"action":"token_revoked","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 16:02:16.563547+00', ''),
	('00000000-0000-0000-0000-000000000000', '640dfdcd-5a77-4b80-a79e-24f81e0d724f', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 16:02:16.701628+00', ''),
	('00000000-0000-0000-0000-000000000000', '0e18de48-b82c-41b2-aeb6-958967777747', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 16:02:16.826635+00', ''),
	('00000000-0000-0000-0000-000000000000', '8106c658-eb7f-45be-8aed-74d2192dad21', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 16:02:16.95761+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e2676804-f1cd-4ff9-aa87-bdf420ccc027', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 16:02:17.083508+00', ''),
	('00000000-0000-0000-0000-000000000000', '85f62188-ae6a-471b-a110-525728ab70c6', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 16:02:17.199595+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a3d7b345-fe58-4dac-8877-1d8b94c2fcc4', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 16:02:17.314459+00', ''),
	('00000000-0000-0000-0000-000000000000', '2fc2cacb-9e9c-47f7-8b5c-13c3edff9631', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 16:02:17.428504+00', ''),
	('00000000-0000-0000-0000-000000000000', '1603bef0-fada-4b31-ae2e-fbf4f86b49aa', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 16:02:17.551653+00', ''),
	('00000000-0000-0000-0000-000000000000', '6b2183e9-3a1f-4987-88e8-c9189e3976d5', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 16:02:17.671053+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c9e1faa0-3214-43d0-b684-6be5f61a5881', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 16:02:17.788027+00', ''),
	('00000000-0000-0000-0000-000000000000', '11573383-0f99-4a53-bc11-b123425e5996', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 17:07:14.95594+00', ''),
	('00000000-0000-0000-0000-000000000000', '7cb6f178-bd97-413c-9985-a7bbe0063817', '{"action":"token_revoked","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 17:07:14.956894+00', ''),
	('00000000-0000-0000-0000-000000000000', '84db1bbe-72b3-4085-95b4-770ef34d5de3', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 18:22:50.654658+00', ''),
	('00000000-0000-0000-0000-000000000000', '5e070521-fd78-43d3-88e3-c8e5af4e86bb', '{"action":"token_revoked","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 18:22:50.655572+00', ''),
	('00000000-0000-0000-0000-000000000000', '12e1e535-85d1-442b-b209-e0431364d4f0', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 19:29:11.30674+00', ''),
	('00000000-0000-0000-0000-000000000000', '0bf16758-ee2a-40bb-ad23-ef67c123850c', '{"action":"token_revoked","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 19:29:11.307506+00', ''),
	('00000000-0000-0000-0000-000000000000', '9af57360-3bae-4462-953b-6a73dec6f586', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 20:49:58.110912+00', ''),
	('00000000-0000-0000-0000-000000000000', '861affe6-01a6-4a22-ba01-f6b08b4e73dd', '{"action":"token_revoked","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 20:49:58.111589+00', ''),
	('00000000-0000-0000-0000-000000000000', '737f5571-98b6-4f43-b1a8-399283a4fa66', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 23:26:31.286465+00', ''),
	('00000000-0000-0000-0000-000000000000', '5af70c1f-6f75-4075-8d72-838825d77ea0', '{"action":"token_revoked","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 23:26:31.287078+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b3fa5eab-d875-4d9c-a2d9-8c687cf37936', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 23:26:31.496021+00', ''),
	('00000000-0000-0000-0000-000000000000', '20c78c0c-943b-4c3e-989c-6cef3d7b9b66', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 23:26:31.657317+00', ''),
	('00000000-0000-0000-0000-000000000000', '1e3208d9-8168-4665-ab1c-8b8bc25153d8', '{"action":"token_refreshed","actor_id":"efd07ef4-17fd-44a0-b33c-e3bea2cbad53","actor_username":"admin@texasknifebarn.local","actor_via_sso":false,"log_type":"token"}', '2026-06-15 23:26:31.817947+00', '');


--
-- Data for Name: custom_oauth_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', 'authenticated', 'authenticated', 'admin@texasknifebarn.local', '$2a$10$3.znxkC6vDy1DtXsDUJI1e4qJTB25wjPLPFgh8wR5IepBPC6BK1ve', '2026-06-13 00:36:41.961175+00', NULL, '', NULL, '', NULL, '', '', NULL, '2026-06-13 00:49:25.567323+00', '{"provider": "email", "providers": ["email"]}', '{"email_verified": true}', NULL, '2026-06-13 00:36:41.957446+00', '2026-06-15 23:26:31.288626+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('efd07ef4-17fd-44a0-b33c-e3bea2cbad53', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', '{"sub": "efd07ef4-17fd-44a0-b33c-e3bea2cbad53", "email": "admin@texasknifebarn.local", "email_verified": false, "phone_verified": false}', 'email', '2026-06-13 00:36:41.95901+00', '2026-06-13 00:36:41.959031+00', '2026-06-13 00:36:41.959031+00', '5ca718a3-2f26-4550-9625-f477186c82c4');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_clients; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag", "oauth_client_id", "refresh_token_hmac_key", "refresh_token_counter", "scopes") VALUES
	('5de9257d-311f-4bac-9bf3-c5034aa1c846', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', '2026-06-13 00:49:25.56739+00', '2026-06-15 23:26:31.818975+00', NULL, 'aal1', NULL, '2026-06-15 23:26:31.818913', 'node', '192.168.65.1', NULL, NULL, NULL, NULL, NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('5de9257d-311f-4bac-9bf3-c5034aa1c846', '2026-06-13 00:49:25.569901+00', '2026-06-13 00:49:25.569901+00', 'password', 'c0b708ca-e324-4ca4-a8ad-383d06514d05');


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

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 1, 'yvuilxthc7t3', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', true, '2026-06-13 00:49:25.568717+00', '2026-06-13 01:48:43.445424+00', NULL, '5de9257d-311f-4bac-9bf3-c5034aa1c846'),
	('00000000-0000-0000-0000-000000000000', 2, 'k242omfypitr', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', true, '2026-06-13 01:48:43.446506+00', '2026-06-13 10:40:18.569429+00', 'yvuilxthc7t3', '5de9257d-311f-4bac-9bf3-c5034aa1c846'),
	('00000000-0000-0000-0000-000000000000', 3, 'mz3hbfyj7wzn', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', true, '2026-06-13 10:40:18.56983+00', '2026-06-13 23:12:29.302943+00', 'k242omfypitr', '5de9257d-311f-4bac-9bf3-c5034aa1c846'),
	('00000000-0000-0000-0000-000000000000', 4, 'wjojtv7pjezr', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', true, '2026-06-13 23:12:29.303345+00', '2026-06-14 00:13:31.642748+00', 'mz3hbfyj7wzn', '5de9257d-311f-4bac-9bf3-c5034aa1c846'),
	('00000000-0000-0000-0000-000000000000', 5, 'mrrrms6doaw2', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', true, '2026-06-14 00:13:31.643252+00', '2026-06-14 01:38:14.65392+00', 'wjojtv7pjezr', '5de9257d-311f-4bac-9bf3-c5034aa1c846'),
	('00000000-0000-0000-0000-000000000000', 6, 'zzgnhkg37ykw', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', true, '2026-06-14 01:38:14.65562+00', '2026-06-14 11:54:03.467928+00', 'mrrrms6doaw2', '5de9257d-311f-4bac-9bf3-c5034aa1c846'),
	('00000000-0000-0000-0000-000000000000', 7, 'zkspy75dnsfw', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', true, '2026-06-14 11:54:03.468863+00', '2026-06-14 21:24:16.896536+00', 'zzgnhkg37ykw', '5de9257d-311f-4bac-9bf3-c5034aa1c846'),
	('00000000-0000-0000-0000-000000000000', 8, 'uzxgfvv5nz6r', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', true, '2026-06-14 21:24:16.896976+00', '2026-06-14 22:25:27.992714+00', 'zkspy75dnsfw', '5de9257d-311f-4bac-9bf3-c5034aa1c846'),
	('00000000-0000-0000-0000-000000000000', 9, 'l3lpixce6wxq', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', true, '2026-06-14 22:25:27.993274+00', '2026-06-14 23:48:54.337169+00', 'uzxgfvv5nz6r', '5de9257d-311f-4bac-9bf3-c5034aa1c846'),
	('00000000-0000-0000-0000-000000000000', 10, 'y227b2uekpob', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', true, '2026-06-14 23:48:54.337611+00', '2026-06-15 00:52:25.770994+00', 'l3lpixce6wxq', '5de9257d-311f-4bac-9bf3-c5034aa1c846'),
	('00000000-0000-0000-0000-000000000000', 11, 'gkz4g2lcycsx', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', true, '2026-06-15 00:52:25.771365+00', '2026-06-15 01:56:10.740745+00', 'y227b2uekpob', '5de9257d-311f-4bac-9bf3-c5034aa1c846'),
	('00000000-0000-0000-0000-000000000000', 12, 'jawzwktzxxra', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', true, '2026-06-15 01:56:10.741149+00', '2026-06-15 10:01:42.929435+00', 'gkz4g2lcycsx', '5de9257d-311f-4bac-9bf3-c5034aa1c846'),
	('00000000-0000-0000-0000-000000000000', 13, 'k2bmpetkqiph', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', true, '2026-06-15 10:01:42.929929+00', '2026-06-15 12:27:14.635184+00', 'jawzwktzxxra', '5de9257d-311f-4bac-9bf3-c5034aa1c846'),
	('00000000-0000-0000-0000-000000000000', 14, 'cxoklaquziip', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', true, '2026-06-15 12:27:14.635609+00', '2026-06-15 14:31:54.774451+00', 'k2bmpetkqiph', '5de9257d-311f-4bac-9bf3-c5034aa1c846'),
	('00000000-0000-0000-0000-000000000000', 15, 'oxnbwwqfhbmb', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', true, '2026-06-15 14:31:54.774916+00', '2026-06-15 16:02:16.56396+00', 'cxoklaquziip', '5de9257d-311f-4bac-9bf3-c5034aa1c846'),
	('00000000-0000-0000-0000-000000000000', 16, 'yb2y4ewwcz5q', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', true, '2026-06-15 16:02:16.564753+00', '2026-06-15 17:07:14.957264+00', 'oxnbwwqfhbmb', '5de9257d-311f-4bac-9bf3-c5034aa1c846'),
	('00000000-0000-0000-0000-000000000000', 17, 'wl2izfykxllf', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', true, '2026-06-15 17:07:14.957891+00', '2026-06-15 18:22:50.655925+00', 'yb2y4ewwcz5q', '5de9257d-311f-4bac-9bf3-c5034aa1c846'),
	('00000000-0000-0000-0000-000000000000', 18, 'dhuuvmkowoyx', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', true, '2026-06-15 18:22:50.65663+00', '2026-06-15 19:29:11.307954+00', 'wl2izfykxllf', '5de9257d-311f-4bac-9bf3-c5034aa1c846'),
	('00000000-0000-0000-0000-000000000000', 19, 'z4pgbh7oxpmr', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', true, '2026-06-15 19:29:11.308608+00', '2026-06-15 20:49:58.112005+00', 'dhuuvmkowoyx', '5de9257d-311f-4bac-9bf3-c5034aa1c846'),
	('00000000-0000-0000-0000-000000000000', 20, '7zckxnpeqajd', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', true, '2026-06-15 20:49:58.112541+00', '2026-06-15 23:26:31.287545+00', 'z4pgbh7oxpmr', '5de9257d-311f-4bac-9bf3-c5034aa1c846'),
	('00000000-0000-0000-0000-000000000000', 21, 'h4pdzhxs3iop', 'efd07ef4-17fd-44a0-b33c-e3bea2cbad53', false, '2026-06-15 23:26:31.287989+00', '2026-06-15 23:26:31.287989+00', '7zckxnpeqajd', '5de9257d-311f-4bac-9bf3-c5034aa1c846');


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

INSERT INTO "public"."brands" ("id", "name", "slug", "created_at", "description") VALUES
	('22222222-2222-2222-2222-222222222222', 'Spyderco', 'spyderco', '2026-05-29 01:48:41.475377+00', NULL),
	('c610c4ff-7f39-4ba0-ba78-48f5e96626cb', 'Milinski Knives', 'milinski-knives', '2026-06-13 01:11:15.695253+00', 'Milinski knives is a generation of high quality fixed blades and folders.'),
	('11111111-1111-1111-1111-111111111111', 'Benchmade', 'benchmade', '2026-05-29 01:48:41.475377+00', 'The Bench'),
	('b3f9997a-7b37-46db-8280-d4625567fb34', 'TKB', 'TKB', '2026-06-13 10:51:40.154793+00', 'Texas Knife Barn specializes in creating custom handcrafted knives that are guaranteed to last a lifetime.');


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."categories" ("id", "name", "slug", "created_at", "description") VALUES
	('33333333-3333-3333-3333-333333333333', 'EDC', 'edc', '2026-05-29 01:48:41.475377+00', NULL),
	('44444444-4444-4444-4444-444444444444', 'Fixed Blade', 'fixed-blade', '2026-05-29 01:48:41.475377+00', NULL),
	('779692e9-d0d0-4006-b56f-45ae59a7f09c', 'Custom Folder', 'cstm-fldr', '2026-06-14 01:49:40.207944+00', 'Custom Folder Designed and Create by Knife Makers');


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."products" ("id", "brand_id", "category_id", "name", "slug", "short_description", "description", "status", "featured", "created_at", "updated_at") VALUES
	('34da3765-5d6d-4f8c-a0ad-4b5dd90dad77', 'b3f9997a-7b37-46db-8280-d4625567fb34', '44444444-4444-4444-4444-444444444444', 'TKB-Skinner', 'tkb-skinner', 'Hunting Knife ', 'The TKB Skinner is designed with a "Fat Belly" to cut through hide and membrane on any size game animal. The knife is hand crafted with spine jimping, a robust finger choil as well as a sharpening choil.
', 'active', false, '2026-06-13 10:53:23.705675+00', '2026-06-13 23:37:48.684+00'),
	('55555555-5555-5555-5555-555555555558', '22222222-2222-2222-2222-222222222222', '33333333-3333-3333-3333-333333333333', 'Spyderco Para 3', 'spyderco-para-3', 'Compact high-performance EDC knife', 'The Para 3 combines excellent ergonomics with premium blade steel.', 'active', true, '2026-06-02 23:17:18.204463+00', '2026-06-02 23:17:18.204463+00'),
	('55555555-5555-5555-5555-555555555560', 'c610c4ff-7f39-4ba0-ba78-48f5e96626cb', '779692e9-d0d0-4006-b56f-45ae59a7f09c', 'Paratrooper  ', 'paratrooper-elegante', 'Top Of Line Handcrafted Folder', 'The Milinski 2025 Best in Show for the Texas Custom Knife Show', 'active', true, '2026-06-02 23:17:18.204463+00', '2026-06-14 12:29:05.61+00'),
	('55555555-5555-5555-5555-555555555559', '22222222-2222-2222-2222-222222222222', '33333333-3333-3333-3333-333333333333', 'Spyderco Paramilitary 2', 'spyderco-paramilitary-2', 'One of the most respected EDC knives available', 'The PM2 is known for exceptional ergonomics and cutting performance.', 'active', true, '2026-06-02 23:17:18.204463+00', '2026-06-02 23:17:18.204463+00'),
	('55555555-5555-5555-5555-555555555556', '11111111-1111-1111-1111-111111111111', '33333333-3333-3333-3333-333333333333', 'Benchmade Osborne 940', 'benchmade-osborne-940', 'Legendary reverse tanto EDC knife', 'The Benchmade Osborne 940 is one of the most iconic everyday carry knives ever produced.', 'active', true, '2026-06-02 23:17:18.204463+00', '2026-06-02 23:17:18.204463+00'),
	('55555555-5555-5555-5555-555555555557', '11111111-1111-1111-1111-111111111111', '33333333-3333-3333-3333-333333333333', 'Benchmade Mini Griptilian', 'benchmade-mini-griptilian', 'Compact and reliable EDC folder', 'The Mini Griptilian delivers Benchmade quality in a compact everyday carry package.', 'active', true, '2026-06-02 23:17:18.204463+00', '2026-06-02 23:17:18.204463+00');


--
-- Data for Name: product_variants; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."product_variants" ("id", "product_id", "sku", "title", "price", "compare_at_price", "active", "created_at", "inventory_quantity") VALUES
	('22130637-171d-4f36-8f8c-b768356cf875', '55555555-5555-5555-5555-555555555556', 'BM-940-GRN', 'Green Aluminum Handle', 219.99, 249.99, true, '2026-06-02 23:17:44.088146+00', 0),
	('9cd4d47f-02eb-4a89-8309-36d0b28f2684', '55555555-5555-5555-5555-555555555557', 'BM-MINI-GRIP', 'Black Handle', 149.99, 169.99, true, '2026-06-02 23:17:44.088146+00', 0),
	('9b03100a-e508-466e-aa05-db1d23e7cc64', '55555555-5555-5555-5555-555555555558', 'SP-PARA3', 'Black G10', 169.99, 189.99, true, '2026-06-02 23:17:44.088146+00', 0),
	('3b0dbef4-f497-4c1d-b15b-9de6aec22c31', '55555555-5555-5555-5555-555555555559', 'SP-PM2', 'Black G10', 189.99, 209.99, true, '2026-06-02 23:17:44.088146+00', 0),
	('51b49b6a-2e36-4b9e-8fdd-5b293e33b28f', '55555555-5555-5555-5555-555555555557', 'BM-MINI-GRIP-ODG', 'OD Green Handle', 149.99, 169.99, true, '2026-06-05 00:06:06.545757+00', 0),
	('c404e4c5-ff5f-467b-8c69-f0dc79055d8b', '55555555-5555-5555-5555-555555555557', 'BM-MINI-GRIP-ORG', 'Orange Handle', 149.99, 169.99, true, '2026-06-05 00:06:06.545757+00', 0),
	('7a333565-d0b9-4cc4-822b-a59ea5a82247', '34da3765-5d6d-4f8c-a0ad-4b5dd90dad77', 'tkb-skinner-basic', 'TKB Skinner Basic Layout', 250.00, 300.00, true, '2026-06-13 23:34:11.356828+00', 0),
	('b69cfbfc-25e4-4247-a17d-42664975efab', '55555555-5555-5555-5555-555555555560', 'MIL-CSTM-Damascus', 'Milinski Customer Folder with Damascus Steel', 1800.00, 2500.00, true, '2026-06-14 00:13:31.769132+00', 0),
	('dc835613-a9cb-4673-8315-3c9e7af8a719', '34da3765-5d6d-4f8c-a0ad-4b5dd90dad77', 'tkb-skinner-sgmnt-hndl', 'TKB Skinner with Segmented Handle', 275.00, 375.00, true, '2026-06-15 21:06:50.567705+00', 0);


--
-- Data for Name: inventory; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."inventory" ("variant_id", "quantity", "low_stock_threshold", "updated_at") VALUES
	('22130637-171d-4f36-8f8c-b768356cf875', 7, 2, '2026-06-15 18:42:54.644931+00'),
	('c404e4c5-ff5f-467b-8c69-f0dc79055d8b', 7, 2, '2026-06-15 18:43:23.959695+00'),
	('51b49b6a-2e36-4b9e-8fdd-5b293e33b28f', 7, 2, '2026-06-15 18:43:25.124908+00'),
	('9cd4d47f-02eb-4a89-8309-36d0b28f2684', 7, 2, '2026-06-15 16:16:58.203871+00'),
	('9b03100a-e508-466e-aa05-db1d23e7cc64', 8, 2, '2026-06-15 18:44:11.740204+00'),
	('b69cfbfc-25e4-4247-a17d-42664975efab', 6, 2, '2026-06-14 00:13:31.774465+00'),
	('7a333565-d0b9-4cc4-822b-a59ea5a82247', 2, 2, '2026-06-13 23:34:11.361983+00'),
	('3b0dbef4-f497-4c1d-b15b-9de6aec22c31', 4, 2, '2026-06-14 02:29:17.831116+00'),
	('dc835613-a9cb-4673-8315-3c9e7af8a719', 3, 3, '2026-06-15 21:06:50.573138+00');


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."orders" ("id", "order_number", "status", "customer_email", "subtotal", "tax_total", "shipping_total", "grand_total", "created_at", "carrier", "tracking_number", "shipped_at") VALUES
	('86417686-5ed1-4ccc-a08a-56bb8c1adc4b', 'TKB-1781517765318', 'delivered', 'joel@texasknifebarn.com', 250.00, 0.00, 0.00, 250.00, '2026-06-15 10:02:45.348474+00', NULL, NULL, NULL),
	('d7fada92-5bb9-40fb-a68c-b50d7a048c8d', 'TKB-1781404157810', 'cancelled', 'joel@texasknifebarn.com', 189.99, 0.00, 0.00, 189.99, '2026-06-14 02:29:17.817018+00', NULL, NULL, NULL),
	('7cf9aec1-5a56-413b-9b01-dd531af6322b', 'TKB-1781540218175', 'pending', 'brian@texasknifebarn.com', 149.99, 0.00, 0.00, 149.99, '2026-06-15 16:16:58.188429+00', NULL, NULL, NULL);


--
-- Data for Name: order_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."order_items" ("id", "order_id", "product_id", "variant_id", "sku", "product_name", "variant_title", "quantity", "unit_price", "created_at") VALUES
	('6a5c24be-a50f-470b-ae7d-b3b315574459', 'd7fada92-5bb9-40fb-a68c-b50d7a048c8d', '55555555-5555-5555-5555-555555555559', '3b0dbef4-f497-4c1d-b15b-9de6aec22c31', 'SP-PM2', 'Spyderco Paramilitary 2', 'Black G10', 1, 189.99, '2026-06-14 02:29:17.82377+00'),
	('623338a1-c40c-40d7-8caa-52cba705c436', '86417686-5ed1-4ccc-a08a-56bb8c1adc4b', '34da3765-5d6d-4f8c-a0ad-4b5dd90dad77', '7a333565-d0b9-4cc4-822b-a59ea5a82247', 'tkb-skinner-basic', 'TKB-Skinner', 'TKB Skinner Basic Layout', 1, 250.00, '2026-06-15 10:02:45.356315+00'),
	('acd27472-ce1a-4b83-9619-1c5875dc60a7', '7cf9aec1-5a56-413b-9b01-dd531af6322b', '55555555-5555-5555-5555-555555555557', '9cd4d47f-02eb-4a89-8309-36d0b28f2684', 'BM-MINI-GRIP', 'Benchmade Mini Griptilian', 'Black Handle', 1, 149.99, '2026-06-15 16:16:58.196668+00');


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
	('1bbb903b-4b81-47b0-9490-f737c7b3fd3f', '55555555-5555-5555-5555-555555555556', '/images/products/osborne-940-1.jpg', 'Benchmade Osborne 940 Open', 0, '2026-06-03 04:00:45.870925+00'),
	('4ded6b9b-aeb5-44fe-9081-a2edc7ba2687', '55555555-5555-5555-5555-555555555556', '/images/products/osborne-940-2.jpg', 'Benchmade Osborne 940 Closed', 1, '2026-06-03 04:00:45.870925+00'),
	('a1eac4c3-f154-4ced-adda-a051598a090a', '55555555-5555-5555-5555-555555555557', '/images/products/BM-Mini-Griptilian-1.jpg', 'Benchmade Mini Griptilian Open', 0, '2026-06-03 08:05:06.731794+00'),
	('bf922a36-c3f6-4c3a-a89a-89ef00c13094', '55555555-5555-5555-5555-555555555557', '/images/products/BM-Mini-Griptilian-2.jpg', 'Benchmade Mini Griptilian Closed', 1, '2026-06-03 08:05:06.731794+00'),
	('372deae9-9909-4a9a-884d-38382d535e17', '55555555-5555-5555-5555-555555555559', '/images/products/spyderco-para2-1.jpg', 'Spyderco Paramilary 2 Open', 0, '2026-06-04 23:49:10.69458+00'),
	('54803951-8c2b-4ee8-862c-db5b7d82f883', '55555555-5555-5555-5555-555555555559', '/images/products/spyderco-para2-2.jpg', 'Spyderco Paramilary 2 Closed', 1, '2026-06-04 23:49:10.69458+00'),
	('ea7eccb2-cd1a-4d21-b240-f9a773d6476b', '55555555-5555-5555-5555-555555555558', '/images/products/spyderco-para-3-1.jpg', 'Spyderco Para 3 Open', 0, '2026-06-04 23:50:28.935065+00'),
	('9e8ecd64-a1c1-4494-a069-4fcffee5a5d7', '55555555-5555-5555-5555-555555555558', '/images/products/spyderco-para-3-2.jpg', 'Spyderco Para 3 Closed', 1, '2026-06-04 23:50:28.935065+00'),
	('9df008be-0127-47a5-966c-4095827d18be', '55555555-5555-5555-5555-555555555558', '/images/products/spyderco-para-3-3.jpg', 'Spyderco Para 3 Closed', 1, '2026-06-04 23:50:28.935065+00'),
	('2d166213-0bb5-4a05-9fba-5a522065f112', '34da3765-5d6d-4f8c-a0ad-4b5dd90dad77', 'http://tkb.local:54321/storage/v1/object/public/product-images/34da3765-5d6d-4f8c-a0ad-4b5dd90dad77/fe60519f-c6d2-4f2c-8c8a-b2449f04e41a.jpg', 'TKB-Skinner', 0, '2026-06-13 23:33:11.759389+00');


--
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."profiles" ("id", "email", "role", "created_at") VALUES
	('efd07ef4-17fd-44a0-b33c-e3bea2cbad53', 'admin@texasknifebarn.local', 'admin', '2026-06-13 00:39:38.062419+00');


--
-- Data for Name: variant_options; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."variant_options" ("id", "variant_id", "option_name", "option_value", "created_at") VALUES
	('5e18edab-1729-43fd-a6f1-ebcbfd7dab87', '9cd4d47f-02eb-4a89-8309-36d0b28f2684', 'Blade Finish', 'Satin', '2026-06-03 09:11:47.725023+00'),
	('7cc85128-45e5-45d9-b2b4-c6d8249956b2', '9cd4d47f-02eb-4a89-8309-36d0b28f2684', 'Handle Color', 'Black', '2026-06-03 09:11:47.725023+00'),
	('2f3ceb53-51e7-4322-a654-af62b34e786c', '22130637-171d-4f36-8f8c-b768356cf875', 'Handle Color', 'Green', '2026-06-03 09:22:46.098452+00'),
	('bf4e41cf-3e61-4670-9045-3bb7a8728c6b', '22130637-171d-4f36-8f8c-b768356cf875', 'Blade Finish', 'Satin', '2026-06-03 09:22:46.098452+00'),
	('7955c309-d852-4862-b317-cd41a46956c7', '9b03100a-e508-466e-aa05-db1d23e7cc64', 'Handle Color', 'Black', '2026-06-03 09:25:09.679134+00'),
	('1103b87c-01a8-4ca9-8a3c-d5e451f21e54', '9b03100a-e508-466e-aa05-db1d23e7cc64', 'Blade Finish', 'Satin', '2026-06-03 09:25:09.679134+00'),
	('296fda00-965c-48a0-9a48-6705c3f6dac8', '3b0dbef4-f497-4c1d-b15b-9de6aec22c31', 'Handle Color', 'Black', '2026-06-03 09:25:30.321086+00'),
	('cf85c3d4-af31-4832-a217-a0d747b6ef58', '3b0dbef4-f497-4c1d-b15b-9de6aec22c31', 'Blade Finish', 'Satin', '2026-06-03 09:25:30.321086+00'),
	('1c3edb3b-6c86-4a29-8b86-c5135a2aeb9d', '51b49b6a-2e36-4b9e-8fdd-5b293e33b28f', 'Handle Color', 'OD Green', '2026-06-05 00:06:26.254241+00'),
	('406feddb-b575-47d8-a472-ffc0c3bbf8ab', '51b49b6a-2e36-4b9e-8fdd-5b293e33b28f', 'Blade Finish', 'Satin', '2026-06-05 00:06:26.254241+00'),
	('52c09993-2df8-449d-bd70-71b072a036fb', 'c404e4c5-ff5f-467b-8c69-f0dc79055d8b', 'Handle Color', 'Orange', '2026-06-05 00:06:26.254241+00'),
	('c3a07277-3047-49f4-be8f-d8a295e40273', 'c404e4c5-ff5f-467b-8c69-f0dc79055d8b', 'Blade Finish', 'Satin', '2026-06-05 00:06:26.254241+00'),
	('b0bbeda7-487c-4332-801f-06cb028151aa', '7a333565-d0b9-4cc4-822b-a59ea5a82247', 'Steel', '80CRV2', '2026-06-13 23:34:35.68053+00'),
	('c6e05526-bf76-4077-b290-88ed729635a4', '7a333565-d0b9-4cc4-822b-a59ea5a82247', 'Handle', 'G10 ', '2026-06-13 23:35:30.924711+00'),
	('322de671-1390-496b-ac74-d83cb79d1f18', '7a333565-d0b9-4cc4-822b-a59ea5a82247', 'Sheath', 'Leather', '2026-06-13 23:35:55.610876+00');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id", "type") VALUES
	('product-images', 'product-images', NULL, '2026-06-13 10:58:19.679885+00', '2026-06-13 10:58:19.679885+00', true, false, NULL, NULL, NULL, 'STANDARD');


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

INSERT INTO "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version", "owner_id", "user_metadata") VALUES
	('4a1a3302-b9e8-463f-886f-b493b47d937c', 'product-images', '34da3765-5d6d-4f8c-a0ad-4b5dd90dad77/a4f68c55-2a39-4662-94e5-d9c85c4a154e.jpg', NULL, '2026-06-13 11:01:21.938805+00', '2026-06-13 11:01:21.938805+00', '2026-06-13 11:01:21.938805+00', '{"eTag": "\"ebca268006dcef463b3eebda8ea078bf\"", "size": 795579, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2026-06-13T11:01:21.933Z", "contentLength": 795579, "httpStatusCode": 200}', 'd6ede23b-e399-4abd-ac2c-95cede2a3176', NULL, '{}'),
	('1e2fc6ce-e0a7-4971-98a9-b5d06ce32b8e', 'product-images', '34da3765-5d6d-4f8c-a0ad-4b5dd90dad77/738834ca-c0f8-44c8-9bf2-538f9a6641e3.jpg', NULL, '2026-06-13 11:09:30.586017+00', '2026-06-13 11:09:30.586017+00', '2026-06-13 11:09:30.586017+00', '{"eTag": "\"ebca268006dcef463b3eebda8ea078bf\"", "size": 795579, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2026-06-13T11:09:30.582Z", "contentLength": 795579, "httpStatusCode": 200}', '17833648-a8ce-4d0b-be02-b43b3af4dc90', NULL, '{}'),
	('3f24747d-e585-4a9d-babf-58fe44b63c41', 'product-images', '34da3765-5d6d-4f8c-a0ad-4b5dd90dad77/89109ee5-856e-4c26-8aa0-b43785488dde.jpg', NULL, '2026-06-13 11:11:50.738697+00', '2026-06-13 11:11:50.738697+00', '2026-06-13 11:11:50.738697+00', '{"eTag": "\"ebca268006dcef463b3eebda8ea078bf\"", "size": 795579, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2026-06-13T11:11:50.735Z", "contentLength": 795579, "httpStatusCode": 200}', '0b6d685c-8804-434f-8590-f06c72701ab1', NULL, '{}'),
	('694cbbe3-0ebe-40bd-81ea-f8c703e4190e', 'product-images', '34da3765-5d6d-4f8c-a0ad-4b5dd90dad77/db6a0643-9d7b-4e20-b57d-04189e5194ac.jpg', NULL, '2026-06-13 11:18:26.247871+00', '2026-06-13 11:18:26.247871+00', '2026-06-13 11:18:26.247871+00', '{"eTag": "\"ebca268006dcef463b3eebda8ea078bf\"", "size": 795579, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2026-06-13T11:18:26.244Z", "contentLength": 795579, "httpStatusCode": 200}', '3316c9ff-d19e-43f2-a7f9-4b76e1f47396', NULL, '{}'),
	('ac253676-506a-4e3b-be95-51215f640b91', 'product-images', '34da3765-5d6d-4f8c-a0ad-4b5dd90dad77/77a53c91-ec3a-4cb3-84fb-c5f6721fb17a.jpg', NULL, '2026-06-13 11:22:53.471358+00', '2026-06-13 11:22:53.471358+00', '2026-06-13 11:22:53.471358+00', '{"eTag": "\"ebca268006dcef463b3eebda8ea078bf\"", "size": 795579, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2026-06-13T11:22:53.467Z", "contentLength": 795579, "httpStatusCode": 200}', '030b94cf-b9be-4a66-9e77-55ba39939cc3', NULL, '{}'),
	('eef1d93c-9f3c-451b-be8c-a8b62e9ed0de', 'product-images', '34da3765-5d6d-4f8c-a0ad-4b5dd90dad77/fe60519f-c6d2-4f2c-8c8a-b2449f04e41a.jpg', NULL, '2026-06-13 23:33:11.744412+00', '2026-06-13 23:33:11.744412+00', '2026-06-13 23:33:11.744412+00', '{"eTag": "\"8539f95d377babde84b64e529b3899d2\"", "size": 1130041, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2026-06-13T23:33:11.739Z", "contentLength": 1130041, "httpStatusCode": 200}', '9eddb38d-4997-4f42-9378-87539e73eef5', NULL, '{}');


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

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 21, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

-- \unrestrict qqsI1IR26F9WblFw8Ov7RscKTpydnQyH6WeSqshmqgEVv6Xjq9EEYcIW8ZkciRE

RESET ALL;
