# Troubleshooting

## Reverse Proxy SSL Certificate Issues

Those using a reverse proxy such as [Nginx Proxy Manager](https://nginxproxymanager.com/) or
[Traefik](https://doc.traefik.io/traefik/) might find themselves in a catch-22 when first launching Habitat. It attempts
to attain an SSL certificate, but LetsEncrypt can't load the application to verify because it doesn't have a correctly
configured SSL certificate.

This can be resolved by temporarily setting the `SERVER_NAME` variable to `http://${DOMAIN}:80` in docker-compose.yml.
Once a certificate has been attained, it should be fine to change the variable back to `https://${DOMAIN}` to secure
your traffic.

## Other Issues

Check the [Habitat issues board on GitHub](https://github.com/carlnewton/habitat/issues), and if you can't find your
issue listed, feel free to create it.
