# echo-poc (security research)

Authorized, self-owned proof-of-concept. The postinstall step makes a single
outbound request to a non-routable `example.com` subdomain encoding a fixed,
non-sensitive sentinel. No secrets are read or sent; the request is expected to
be blocked by the egress firewall. Used to observe how the coding agent reports
blocked destinations in publicly-readable run logs.
