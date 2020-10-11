# Test TCP
## Executer l'application tcp
> npm run start:tcp \
> telnet 127.0.0.1 8080

# Test UDP
## Executer l'application upd
> npm run start:udp \
> echo "Hello world!" | nc -w1 -u 127.0.0.1 8081

**nc : netcat** <br/>
**w1 : attendre 1 seconde sinon abandonner**