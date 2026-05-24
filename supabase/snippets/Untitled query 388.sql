create policy "users can view own profile"
on public.profiles
for select
using (auth.uid() = id);