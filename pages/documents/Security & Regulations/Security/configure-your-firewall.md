---
pagename: Configuring your firewall
categoryName: Security & regulations
subCategoryName: Security
indicator: both
subtitle: IP ranges and certificate provider configuration which must be whitelisted
  in your firewall in order to enable the full functionality
level3: ''
permalink: security-regulations-security-configuring-your-firewall.html
isTutorial: false
isNew: false
date: '2019-01-24T09:59:09.000+00:00'

---
This article provides the IP ranges and certificate provider configuration which must be whitelisted in your firewall in order to enable the full functionality of the LivePerson Workspace.

## IP ranges for your firewall whitelist

LiveEngage communicates with LivePerson’s servers via ports 80 and 443. Your firewall and other hardware/software protection should be configured to allow outbound traffic from your network to LivePerson servers on these ports. No other ports are required.

Below is a detailed list of the IP ranges that should be whitelisted in your firewall settings to allow communication with LivePerson.

LiveEngage services are geo-located. LiveEngage users will usually get serviced from the nearest LivePerson Farm, however, all of the IP addresses below should be whitelisted.

Some LiveEngage services rely on the WebSocket technology to provide the best experience. Your firewall must therefore allow these connections. WebSocket technology works over standard port 443, with the only difference being that it is a long-lived connection that should not be closed by the firewall after timeouts or for any other reason.

{: .notice}  
LiveEngage comprises many different services, with new IP ranges added from time to time. Please refer back to this article to ensure your firewall settings are up-to-date._

| IPv4 Range | CIDR Block |
| --- | --- |
| 43.251.40.0 - 43.252.43.255 | 43.251.40.0/22 |
| 103.42.132.0 - 103.42.135.255 | 103.42.132.0/22 |
| 162.252.72.0 - 162.252.75.255 | 162.252.72.0/22 |
| 162.252.76.0 - 162.252.79.255 | 162.252.76.0/22 |
| 178.249.96.0 - 178.249.99.255 | 178.249.96.0/22 |
| 178.249.100.0 - 178.249.103.255 | 178.249.100.0 /22 |
| 199.187.116.0 - 199.187.119.255 | 199.187.116.0/22 |
| 208.89.12.0 - 208.89.15.255 | 208.89.12.0/22 |
| 185.6.224.0 - 185.6.227.255 | 185.6.224.0/22 |

| IPv6 Range | CIDR Block |
| --- | --- |
| 2a03:6400:: -  2a03:6400:ffff:ffff:ffff:ffff:ffff:ffff | 2a03:6400::/32 |

The following IP ranges have been added to the whitelist for bots:

* 172.16.0.0 - 172.31.255.255
* 10.16.0.0 - 10.31.255.255
* 10.32.0.0 - 10.47.255.255
* 10.48.0.0 - 10.63.255.255
* 10.160.0.0 - 10.175.255.255
* 10.176.0.0 - 10.191.255.255

Third-Party Bot Integrations in particular will be served from the following IPs:

| Region | Gateway Name | Gateway IP |
| --- | --- | --- |
| N.Virginia | gw1.mgmt.fs.liveperson.com | 34.193.104.2 |
| N.Virginia | gw2.mgmt.fs.liveperson.com | 52.6.58.86 |
| Ireland | gw1.emea.fs.liveperson.com | 52.30.229.238 |
| Ireland | gw2.emea.fs.liveperson.com | 54.72.49.55 |
| Sydney | gw1.apac.fs.liveperson.com | 52.63.172.179 |
| Sydney | gw2.apac.fs.liveperson.com | 13.210.123.189 |

## Domains

Liveperson owns these second level domains:

* liveperson.com
* liveperson.net
* lpsnmedia.net
* liveengage.net
* liveengage.com
* liveper.sn

## Certificate providers

LiveEngage works with the following certificate providers: VeriSign, thawte, Comodo, GeoTrust, and CyberTrust.

Please make sure that the Certificate Revocation Lists (CRL) and the Online Certificate Status Protocols (OCSP) of the following providers are allowed by your firewall and other hardware/software protection:

* http://crl.verisign.com
* http://crl.thawte.com
* http://crl.comodoca.com
* http://crl.geotrust.com
* http://crl.omniroot.com
* http://ocsp.verisign.com
* http://ocsp.thawte.com
* http://ocsp.comodoca.com
* http://ocsp.usertrust.com
* http://ocsp.geotrust.com
