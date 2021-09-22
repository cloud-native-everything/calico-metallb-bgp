{
  "srl_nokia-acl:acl": {
    "cpm-filter": {
      "ipv4-filter": {
        "statistics-per-entry": true,
        "entry": [
          {
            "sequence-id": 10,
            "description": "Accept incoming ICMP unreachable messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "icmp",
              "icmp": {
                "type": "dest-unreachable",
                "code": [
                  0,
                  1,
                  2,
                  3,
                  4,
                  13
                ]
              }
            }
          },
          {
            "sequence-id": 20,
            "description": "Accept incoming ICMP time-exceeded messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "icmp",
              "icmp": {
                "type": "time-exceeded"
              }
            }
          },
          {
            "sequence-id": 30,
            "description": "Accept incoming ICMP parameter problem messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "icmp",
              "icmp": {
                "type": "param-problem"
              }
            }
          },
          {
            "sequence-id": 40,
            "description": "Accept incoming ICMP echo messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "icmp",
              "icmp": {
                "type": "echo"
              }
            }
          },
          {
            "sequence-id": 50,
            "description": "Accept incoming ICMP echo-reply messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "icmp",
              "icmp": {
                "type": "echo-reply"
              }
            }
          },
          {
            "sequence-id": 60,
            "description": "Accept incoming SSH when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 22
              }
            }
          },
          {
            "sequence-id": 70,
            "description": "Accept incoming SSH when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 22
              }
            }
          },
          {
            "sequence-id": 80,
            "description": "Accept incoming Telnet when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 23
              }
            }
          },
          {
            "sequence-id": 90,
            "description": "Accept incoming Telnet when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 23
              }
            }
          },
          {
            "sequence-id": 100,
            "description": "Accept incoming TACACS+ when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 49
              }
            }
          },
          {
            "sequence-id": 110,
            "description": "Accept incoming TACACS+ when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 49
              }
            }
          },
          {
            "sequence-id": 120,
            "description": "Accept incoming DNS response messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "source-port": {
                "operator": "eq",
                "value": 53
              }
            }
          },
          {
            "sequence-id": 130,
            "description": "Accept incoming DHCP messages targeted for BOOTP/DHCP client",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 68
              }
            }
          },
          {
            "sequence-id": 140,
            "description": "Accept incoming TFTP read-request and write-request messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 69
              }
            }
          },
          {
            "sequence-id": 150,
            "description": "Accept incoming HTTP(JSON-RPC) when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 80
              }
            }
          },
          {
            "sequence-id": 160,
            "description": "Accept incoming HTTP(JSON-RPC) when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 80
              }
            }
          },
          {
            "sequence-id": 170,
            "description": "Accept incoming NTP messages from servers",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "source-port": {
                "operator": "eq",
                "value": 123
              }
            }
          },
          {
            "sequence-id": 180,
            "description": "Accept incoming SNMP GET/GETNEXT messages from servers",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 161
              }
            }
          },
          {
            "sequence-id": 190,
            "description": "Accept incoming BGP when the other router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 179
              }
            }
          },
          {
            "sequence-id": 200,
            "description": "Accept incoming BGP when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 179
              }
            }
          },
          {
            "sequence-id": 210,
            "description": "Accept incoming HTTPS(JSON-RPC) when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 443
              }
            }
          },
          {
            "sequence-id": 220,
            "description": "Accept incoming HTTPS(JSON-RPC) when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 443
              }
            }
          },
          {
            "sequence-id": 230,
            "description": "Accept incoming single-hop BFD session messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 3784
              }
            }
          },
          {
            "sequence-id": 240,
            "description": "Accept incoming multi-hop BFD session messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 4784
              }
            }
          },
          {
            "sequence-id": 250,
            "description": "Accept incoming uBFD session messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 6784
              }
            }
          },
          {
            "sequence-id": 260,
            "description": "Accept incoming gNMI messages when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 57400
              }
            }
          },
          {
            "sequence-id": 270,
            "description": "Accept incoming UDP traceroute messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "destination-port": {
                "range": {
                  "start": 33434,
                  "end": 33464
                }
              }
            }
          },
          {
            "sequence-id": 280,
            "description": "Accept incoming ICMP timestamp messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "icmp",
              "icmp": {
                "type": "timestamp"
              }
            }
          },
          {
            "sequence-id": 290,
            "description": "Accept incoming OSPF messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": 89
            }
          },
          {
            "sequence-id": 300,
            "description": "Accept incoming DHCP relay messages targeted for BOOTP/DHCP server",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 67
              }
            }
          },
          {
            "sequence-id": 310,
            "description": "Accept ICMP fragment packets",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "fragment": true,
              "protocol": "icmp"
            }
          },
          {
            "sequence-id": 320,
            "description": "Drop all else",
            "action": {
              "drop": {
                "log": true
              }
            }
          }
        ]
      },
      "ipv6-filter": {
        "statistics-per-entry": true,
        "entry": [
          {
            "sequence-id": 10,
            "description": "Accept incoming ICMPv6 unreachable messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "icmp6",
              "icmp6": {
                "type": "dest-unreachable",
                "code": [
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6
                ]
              }
            }
          },
          {
            "sequence-id": 20,
            "description": "Accept incoming ICMPv6 packet-too-big messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "icmp6",
              "icmp6": {
                "type": "packet-too-big"
              }
            }
          },
          {
            "sequence-id": 30,
            "description": "Accept incoming ICMPv6 time-exceeded messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "icmp6",
              "icmp6": {
                "type": "time-exceeded"
              }
            }
          },
          {
            "sequence-id": 40,
            "description": "Accept incoming ICMPv6 parameter problem messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "icmp6",
              "icmp6": {
                "type": "param-problem"
              }
            }
          },
          {
            "sequence-id": 50,
            "description": "Accept incoming ICMPv6 echo-request messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "icmp6",
              "icmp6": {
                "type": "echo-request"
              }
            }
          },
          {
            "sequence-id": 60,
            "description": "Accept incoming ICMPv6 echo-reply messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "icmp6",
              "icmp6": {
                "type": "echo-reply"
              }
            }
          },
          {
            "sequence-id": 70,
            "description": "Accept incoming ICMPv6 router-advertisement messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "icmp6",
              "icmp6": {
                "type": "router-advertise"
              }
            }
          },
          {
            "sequence-id": 80,
            "description": "Accept incoming ICMPv6 neighbor-solicitation messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "icmp6",
              "icmp6": {
                "type": "neighbor-solicit"
              }
            }
          },
          {
            "sequence-id": 90,
            "description": "Accept incoming ICMPv6 neighbor-advertisement messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "icmp6",
              "icmp6": {
                "type": "neighbor-advertise"
              }
            }
          },
          {
            "sequence-id": 100,
            "description": "Accept incoming SSH when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 22
              }
            }
          },
          {
            "sequence-id": 110,
            "description": "Accept incoming SSH when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 22
              }
            }
          },
          {
            "sequence-id": 120,
            "description": "Accept incoming Telnet when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 23
              }
            }
          },
          {
            "sequence-id": 130,
            "description": "Accept incoming Telnet when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 23
              }
            }
          },
          {
            "sequence-id": 140,
            "description": "Accept incoming TACACS+ when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 49
              }
            }
          },
          {
            "sequence-id": 150,
            "description": "Accept incoming TACACS+ when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 49
              }
            }
          },
          {
            "sequence-id": 160,
            "description": "Accept incoming DNS response messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "udp",
              "source-port": {
                "operator": "eq",
                "value": 53
              }
            }
          },
          {
            "sequence-id": 170,
            "description": "Accept incoming TFTP read-request and write-request messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 69
              }
            }
          },
          {
            "sequence-id": 180,
            "description": "Accept incoming HTTP(JSON-RPC) when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 80
              }
            }
          },
          {
            "sequence-id": 190,
            "description": "Accept incoming HTTP(JSON-RPC) when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 80
              }
            }
          },
          {
            "sequence-id": 200,
            "description": "Accept incoming NTP messages from servers",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "udp",
              "source-port": {
                "operator": "eq",
                "value": 123
              }
            }
          },
          {
            "sequence-id": 210,
            "description": "Accept incoming SNMP GET/GETNEXT messages from servers",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 161
              }
            }
          },
          {
            "sequence-id": 220,
            "description": "Accept incoming BGP when the other router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 179
              }
            }
          },
          {
            "sequence-id": 230,
            "description": "Accept incoming BGP when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 179
              }
            }
          },
          {
            "sequence-id": 240,
            "description": "Accept incoming HTTPS(JSON-RPC) when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 443
              }
            }
          },
          {
            "sequence-id": 250,
            "description": "Accept incoming HTTPS(JSON-RPC) when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 443
              }
            }
          },
          {
            "sequence-id": 260,
            "description": "Accept incoming DHCPv6 client messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 546
              }
            }
          },
          {
            "sequence-id": 270,
            "description": "Accept incoming single-hop BFD session messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 3784
              }
            }
          },
          {
            "sequence-id": 280,
            "description": "Accept incoming multi-hop BFD session messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 4784
              }
            }
          },
          {
            "sequence-id": 290,
            "description": "Accept incoming uBFD session messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 6784
              }
            }
          },
          {
            "sequence-id": 300,
            "description": "Accept incoming gNMI messages when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 57400
              }
            }
          },
          {
            "sequence-id": 310,
            "description": "Accept incoming UDP traceroute messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "udp",
              "destination-port": {
                "range": {
                  "start": 33434,
                  "end": 33464
                }
              }
            }
          },
          {
            "sequence-id": 320,
            "description": "Accept incoming IPV6 hop-in-hop messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": 0
            }
          },
          {
            "sequence-id": 330,
            "description": "Accept incoming IPV6 fragment header messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": 44
            }
          },
          {
            "sequence-id": 340,
            "description": "Accept incoming OSPF messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": 89
            }
          },
          {
            "sequence-id": 350,
            "description": "Accept incoming DHCPv6 relay messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 547
              }
            }
          },
          {
            "sequence-id": 360,
            "description": "Drop all else",
            "action": {
              "drop": {
                "log": true
              }
            }
          }
        ]
      }
    }
  },
  "srl_nokia-bfd:bfd": {
    "subinterface": [
      {
        "id": "ethernet-1/1.0",
        "admin-state": "enable"
      },
      {
        "id": "ethernet-1/2.0",
        "admin-state": "enable"
      }
    ]
  },
  "srl_nokia-interfaces:interface": [
    {
      "name": "ethernet-1/1",
      "description": "Interface to Spine1",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "admin-state": "enable",
          "ip-mtu": 5000,
          "ipv4": {
            "address": [
              {
                "ip-prefix": "10.1.4.1/31"
              }
            ]
          }
        }
      ]
    },
    {
      "name": "ethernet-1/2",
      "description": "Interface to spine-2",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "admin-state": "enable",
          "ip-mtu": 5000,
          "ipv4": {
            "address": [
              {
                "ip-prefix": "10.2.4.1/31"
              }
            ]
          }
        }
      ]
    },
    {
      "name": "ethernet-1/3"
    },
    {
      "name": "ethernet-1/10",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "type": "srl_nokia-interfaces:bridged",
          "admin-state": "enable"
        }
      ]
    },
    {
      "name": "ethernet-1/11",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "type": "srl_nokia-interfaces:bridged",
          "admin-state": "enable"
        }
      ]
    },
    {
      "name": "ethernet-1/12",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "type": "srl_nokia-interfaces:bridged",
          "admin-state": "enable"
        }
      ]
    },
    {
      "name": "ethernet-1/19",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "type": "srl_nokia-interfaces:bridged",
          "admin-state": "enable"
        }
      ]
    },
    {
      "name": "irb0",
      "subinterface": [
        {
          "index": 0,
          "ipv4": {
            "address": [
              {
                "ip-prefix": "192.168.101.1/24",
                "anycast-gw": true
              }
            ],
            "srl_nokia-interfaces-nbr:arp": {
              "learn-unsolicited": true,
              "host-route": {
                "populate": [
                  {
                    "route-type": "dynamic"
                  }
                ]
              },
              "srl_nokia-interfaces-nbr-evpn:evpn": {
                "advertise": [
                  {
                    "route-type": "dynamic"
                  }
                ]
              }
            }
          },
          "anycast-gw": {
            
          }
        },
        {
          "index": 1,
          "ipv4": {
            "address": [
              {
                "ip-prefix": "192.168.201.1/24",
                "anycast-gw": true
              }
            ],
            "srl_nokia-interfaces-nbr:arp": {
              "learn-unsolicited": true,
              "host-route": {
                "populate": [
                  {
                    "route-type": "dynamic"
                  }
                ]
              },
              "srl_nokia-interfaces-nbr-evpn:evpn": {
                "advertise": [
                  {
                    "route-type": "dynamic"
                  }
                ]
              }
            }
          },
          "anycast-gw": {
            
          }
        },
        {
          "index": 2,
          "ipv4": {
            "address": [
              {
                "ip-prefix": "172.16.254.1/24",
                "anycast-gw": true
              }
            ],
            "srl_nokia-interfaces-nbr:arp": {
              "learn-unsolicited": true,
              "host-route": {
                "populate": [
                  {
                    "route-type": "dynamic"
                  }
                ]
              },
              "srl_nokia-interfaces-nbr-evpn:evpn": {
                "advertise": [
                  {
                    "route-type": "dynamic"
                  }
                ]
              }
            }
          },
          "anycast-gw": {
            
          }
        }
      ]
    },
    {
      "name": "mgmt0",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "admin-state": "enable",
          "ipv4": {
            "srl_nokia-interfaces-ip-dhcp:dhcp-client": {
              
            }
          },
          "ipv6": {
            "srl_nokia-interfaces-ip-dhcp:dhcp-client": {
              
            }
          }
        }
      ]
    },
    {
      "name": "system0",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "admin-state": "enable",
          "ipv4": {
            "address": [
              {
                "ip-prefix": "1.1.1.4/32"
              }
            ]
          }
        }
      ]
    }
  ],
  "srl_nokia-system:system": {
    "srl_nokia-configuration:configuration": {
      "srl_nokia-configuration-role:role": [
        {
          "name": "gnmi",
          "rule": [
            {
              "path-reference": "/",
              "action": "write"
            }
          ]
        }
      ]
    },
    "srl_nokia-aaa:aaa": {
      "authentication": {
        "authentication-method": [
          "local"
        ],
        "user": [
          {
            "username": "pinrojas",
            "password": "$ar2$1gWozHHit2c=$EOzjjyo25lQQZb7t/W85mw==",
            "role": [
              "gnmi"
            ]
          }
        ]
      },
      "authorization": {
        "role": [
          {
            "rolename": "gnmi"
          }
        ]
      },
      "server-group": [
        {
          "name": "local"
        }
      ]
    },
    "srl_nokia-gnmi-server:gnmi-server": {
      "admin-state": "enable",
      "timeout": 7200,
      "rate-limit": 60,
      "session-limit": 20,
      "network-instance": [
        {
          "name": "mgmt",
          "admin-state": "enable",
          "use-authentication": true,
          "port": 57400,
          "tls-profile": "tls-profile-1"
        }
      ]
    },
    "srl_nokia-tls:tls": {
      "server-profile": [
        {
          "name": "tls-profile-1",
          "key": "$aes$aoGbVND0JX0E=$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",
          "certificate": "-----BEGIN CERTIFICATE-----\nMIIDpjCCAo6gAwIBAgIJAOMhrE6Rcp65MA0GCSqGSIb3DQEBCwUAMH4xCzAJBgNV\nBAYTAlVTMQ4wDAYDVQQIDAVUZXhhczEPMA0GA1UEBwwGRGFsbGFzMQ4wDAYDVQQK\nDAVOb2tpYTELMAkGA1UECwwCTkkxDTALBgNVBAMMBG15Q0ExIjAgBgkqhkiG9w0B\nCQEWE21hdS5yb2phc0Bub2tpYS5jb20wHhcNMjEwNjE3MTYyNDQ0WhcNMjQwNDA2\nMTYyNDQ0WjBbMQswCQYDVQQGEwJVUzEOMAwGA1UECAwFVGV4YXMxDzANBgNVBAcM\nBkRhbGxhczEOMAwGA1UECgwFTm9raWExCzAJBgNVBAsMAk5JMQ4wDAYDVQQDDAVs\nZWFmMTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALhvtDZuhh4Q+MKd\ns9KG0uY+XXzpAg7h627GrVutP7bZ9nqx48qnmIucC3214+1vh0zLNMM6LXVKzitC\nj8YUkYTnoN1v3RqU7Y7BlpaVKaRjXG0N2I4Hdr5/5Hm+K6hAD+Vbo2f7CNomUwlx\nLxiQuwuBz9qtvSpuLG5fHtClmFOK6NQ100tmyvFTN04CWRQKWXW8CyRo8WITx6dg\nAoiKKvQi9Gs5lNHGhdPYBvtjXyi5D37et0xTwDHBAgzzrq7TnX5t3mCVv/PiD3Z+\nuqfZMJCvDeaPyN8TgJv1MQgW5k3nM8lIWGV5cI+ZpGweZBFOjnfkVDS5fKOIZP+s\nFBjx2LUCAwEAAaNKMEgwCQYDVR0TBAIwADALBgNVHQ8EBAMCBeAwHQYDVR0lBBYw\nFAYIKwYBBQUHAwEGCCsGAQUFBwMCMA8GA1UdEQQIMAaHBKwUFAQwDQYJKoZIhvcN\nAQELBQADggEBADbE+l/D2dIa1+hzyw1vskVoTuii6vdWUxNkSqV0AGAlEUEiGaiT\nouhTtxH1faKMkUKs1RonuTs5JjVVerJvuKDPKBny5kF11k/ClczOqWKx/FUSQJZ9\n63sTpX5rbldyARUNfrQBnQgYpcJo93a7D1juBld/BxpFYwaeFAr2pAgrsIA0wadE\nd49thlHb2ZX0V3PqTC5X+OvTBO9BjbsiaAzUlsF8UdSbk9OgITwVw1Uxd1jjtT8J\nHlLQWu23L2xlNTutmA1pJDW0ZhEo9k8IhwE7yev3NJce7xIyoWazrp91SNibX8/u\noYrHxeHlAOoKsHjSlB8aXER1nnl4PeKCVb4=\n-----END CERTIFICATE-----",
          "authenticate-client": true,
          "trust-anchor": "-----BEGIN CERTIFICATE-----\nMIIDzzCCAregAwIBAgIJAKkjJjxkuZNhMA0GCSqGSIb3DQEBCwUAMH4xCzAJBgNV\nBAYTAlVTMQ4wDAYDVQQIDAVUZXhhczEPMA0GA1UEBwwGRGFsbGFzMQ4wDAYDVQQK\nDAVOb2tpYTELMAkGA1UECwwCTkkxDTALBgNVBAMMBG15Q0ExIjAgBgkqhkiG9w0B\nCQEWE21hdS5yb2phc0Bub2tpYS5jb20wHhcNMjEwNjE3MTYyNDQzWhcNMjQwNDA2\nMTYyNDQzWjB+MQswCQYDVQQGEwJVUzEOMAwGA1UECAwFVGV4YXMxDzANBgNVBAcM\nBkRhbGxhczEOMAwGA1UECgwFTm9raWExCzAJBgNVBAsMAk5JMQ0wCwYDVQQDDARt\neUNBMSIwIAYJKoZIhvcNAQkBFhNtYXUucm9qYXNAbm9raWEuY29tMIIBIjANBgkq\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsNyXZKd0kvc9KWsHGWg3GG69bxhFRiCl\neTyS/USW06VrZpSaSn0aro5dNY9tkZpyOJoEfSRuuMS2YssqfsWcG8YrARUvxgNc\n+2fwOICE/dATpKwgKR46cH90lzJwpRLs6raOKdYnx0ULdn4jBwR70X4T3EPbU6CM\nT2QfXYMNbaIzKVeW81EBOhqXZX+KfuPU2UZwHJ2iid7ad7/Yjr9bJhM3aqknBmMz\nWC+eOGLHtuPaMC1kQzIaFUY+asP93h1x0nqEtaMGik7EI6AcGfDl+a/7sEHUkune\nOCxVg1M8qtulVCzJ7YdzCSxtBHcUgEpPNSGjd4jHObnW+wPpO5BoCwIDAQABo1Aw\nTjAdBgNVHQ4EFgQUXpUZfZ/TGAs88q06lR0hu28JLgYwHwYDVR0jBBgwFoAUXpUZ\nfZ/TGAs88q06lR0hu28JLgYwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQsFAAOC\nAQEAe9CxzH1FBoKouyM/aVDO+8E0u20I0SgbDjScWkoY4swpDlPkBa3fMYghMY+e\namlgEBq/n16s6N0U4H5SRZ6hydrFlMcsYqQX77nXJ2sQLJf5U0MoXf6zuL5A2rU/\nrbyjIC5y1U8LlSl6/iTD978uOtHtxaG/ErvJra78mYPL45/NIC/sOQv27H08zu9H\nNzu+jdZoCDfmYKYJV4HnhP88Wg2bfkIRvYBqIOwYGv1Td1CM1oYKfrd2tnEa4b1q\n+P5nQXz4LfW9Qp33cTZ3oqWKV5Zu0+2tRAniNNQCEIGlo8TKFmwJFj3staygCbie\nAVfmPw8IhwzPa8QBijnJC3lN2w==\n-----END CERTIFICATE-----"
        }
      ]
    },
    "srl_nokia-json-rpc:json-rpc-server": {
      "network-instance": [
        {
          "name": "mgmt",
          "http": {
            "admin-state": "enable",
            "use-authentication": true,
            "session-limit": 1,
            "port": 4000
          },
          "https": {
            "admin-state": "enable",
            "use-authentication": true,
            "session-limit": 1,
            "port": 443,
            "tls-profile": "tls-profile-1",
            "source-address": [
              "::"
            ]
          }
        }
      ]
    },
    "srl_nokia-ssh:ssh-server": {
      "network-instance": [
        {
          "name": "mgmt",
          "admin-state": "enable"
        }
      ]
    },
    "srl_nokia-lldp:lldp": {
      "admin-state": "enable"
    },
    "srl_nokia-logging:logging": {
      "network-instance": "mgmt",
      "buffer": [
        {
          "buffer-name": "messages",
          "rotate": 3,
          "size": "10000000",
          "facility": [
            {
              "facility-name": "local6",
              "priority": {
                "match-above": "informational"
              }
            }
          ]
        },
        {
          "buffer-name": "system",
          "facility": [
            {
              "facility-name": "auth",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "cron",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "daemon",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "ftp",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "kern",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "lpr",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "mail",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "news",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "syslog",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "user",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "uucp",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "local0",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "local1",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "local2",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "local3",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "local4",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "local5",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "local7",
              "priority": {
                "match-above": "warning"
              }
            }
          ]
        }
      ],
      "file": [
        {
          "file-name": "messages",
          "rotate": 3,
          "size": "10000000",
          "facility": [
            {
              "facility-name": "local6",
              "priority": {
                "match-above": "warning"
              }
            }
          ]
        }
      ]
    }
  },
  "srl_nokia-network-instance:network-instance": [
    {
      "name": "default",
      "type": "srl_nokia-network-instance:default",
      "admin-state": "enable",
      "interface": [
        {
          "name": "ethernet-1/1.0"
        },
        {
          "name": "ethernet-1/2.0"
        },
        {
          "name": "system0.0"
        }
      ],
      "protocols": {
        "srl_nokia-bgp:bgp": {
          "autonomous-system": 65004,
          "router-id": "1.1.1.4",
          "group": [
            {
              "group-name": "eBGP-underlay",
              "admin-state": "enable",
              "export-policy": "export-all",
              "import-policy": "import-all",
              "peer-as": 64999,
              "failure-detection": {
                "enable-bfd": true,
                "fast-failover": true
              },
              "timers": {
                "connect-retry": 5,
                "hold-time": 5,
                "keepalive-interval": 2,
                "minimum-advertisement-interval": 2
              }
            },
            {
              "group-name": "iBGP-evpn",
              "admin-state": "enable",
              "export-policy": "export-all",
              "import-policy": "import-all",
              "peer-as": 65123,
              "evpn": {
                "admin-state": "enable"
              },
              "local-as": [
                {
                  "as-number": 65123
                }
              ],
              "timers": {
                "minimum-advertisement-interval": 1
              }
            },
            {
              "group-name": "spines",
              "failure-detection": {
                "enable-bfd": true,
                "fast-failover": true
              }
            }
          ],
          "ipv4-unicast": {
            "admin-state": "enable"
          },
          "neighbor": [
            {
              "peer-address": "1.1.1.11",
              "admin-state": "enable",
              "peer-group": "iBGP-evpn"
            },
            {
              "peer-address": "1.1.1.12",
              "admin-state": "enable",
              "peer-group": "iBGP-evpn"
            },
            {
              "peer-address": "10.1.4.0",
              "admin-state": "enable",
              "peer-group": "eBGP-underlay"
            },
            {
              "peer-address": "10.2.4.0",
              "admin-state": "enable",
              "peer-group": "eBGP-underlay"
            }
          ],
          "route-advertisement": {
            "rapid-withdrawal": true
          },
          "trace-options": {
            "flag": [
              {
                "name": "packets",
                "modifier": "detail"
              },
              {
                "name": "route",
                "modifier": "detail"
              },
              {
                "name": "notification",
                "modifier": "detail"
              },
              {
                "name": "socket",
                "modifier": "detail"
              },
              {
                "name": "update",
                "modifier": "detail"
              }
            ]
          }
        }
      }
    },
    {
      "name": "ip-vrf1",
      "type": "srl_nokia-network-instance:ip-vrf",
      "admin-state": "enable",
      "interface": [
        {
          "name": "irb0.0"
        },
        {
          "name": "irb0.1"
        },
        {
          "name": "irb0.2"
        }
      ],
      "vxlan-interface": [
        {
          "name": "vxlan1.4"
        }
      ],
      "protocols": {
        "bgp-evpn": {
          "srl_nokia-bgp-evpn:bgp-instance": [
            {
              "id": 1,
              "admin-state": "enable",
              "vxlan-interface": "vxlan1.4",
              "evi": 4
            }
          ]
        },
        "srl_nokia-bgp-vpn:bgp-vpn": {
          "bgp-instance": [
            {
              "id": 1,
              "route-target": {
                "export-rt": "target:65123:4",
                "import-rt": "target:65123:4"
              }
            }
          ]
        }
      }
    },
    {
      "name": "mac-vrf1",
      "type": "srl_nokia-network-instance:mac-vrf",
      "admin-state": "enable",
      "interface": [
        {
          "name": "ethernet-1/10.0"
        },
        {
          "name": "ethernet-1/19.0"
        },
        {
          "name": "irb0.0"
        }
      ],
      "vxlan-interface": [
        {
          "name": "vxlan1.1"
        }
      ],
      "protocols": {
        "bgp-evpn": {
          "srl_nokia-bgp-evpn:bgp-instance": [
            {
              "id": 1,
              "admin-state": "enable",
              "vxlan-interface": "vxlan1.1",
              "evi": 1
            }
          ]
        },
        "srl_nokia-bgp-vpn:bgp-vpn": {
          "bgp-instance": [
            {
              "id": 1,
              "route-target": {
                "export-rt": "target:65123:1",
                "import-rt": "target:65123:1"
              }
            }
          ]
        }
      }
    },
    {
      "name": "mac-vrf2",
      "type": "srl_nokia-network-instance:mac-vrf",
      "admin-state": "enable",
      "interface": [
        {
          "name": "ethernet-1/11.0"
        },
        {
          "name": "irb0.1"
        }
      ],
      "vxlan-interface": [
        {
          "name": "vxlan1.2"
        }
      ],
      "protocols": {
        "bgp-evpn": {
          "srl_nokia-bgp-evpn:bgp-instance": [
            {
              "id": 1,
              "admin-state": "enable",
              "vxlan-interface": "vxlan1.2",
              "evi": 2
            }
          ]
        },
        "srl_nokia-bgp-vpn:bgp-vpn": {
          "bgp-instance": [
            {
              "id": 1,
              "route-target": {
                "export-rt": "target:65123:2",
                "import-rt": "target:65123:2"
              }
            }
          ]
        }
      }
    },
    {
      "name": "mac-vrf3",
      "type": "srl_nokia-network-instance:mac-vrf",
      "admin-state": "enable",
      "interface": [
        {
          "name": "ethernet-1/12.0"
        },
        {
          "name": "irb0.2"
        }
      ],
      "vxlan-interface": [
        {
          "name": "vxlan1.3"
        }
      ],
      "protocols": {
        "bgp-evpn": {
          "srl_nokia-bgp-evpn:bgp-instance": [
            {
              "id": 1,
              "admin-state": "enable",
              "vxlan-interface": "vxlan1.3",
              "evi": 3
            }
          ]
        },
        "srl_nokia-bgp-vpn:bgp-vpn": {
          "bgp-instance": [
            {
              "id": 1
            }
          ]
        }
      }
    },
    {
      "name": "mgmt",
      "type": "srl_nokia-network-instance:ip-vrf",
      "admin-state": "enable",
      "description": "Management network instance",
      "interface": [
        {
          "name": "mgmt0.0"
        }
      ],
      "protocols": {
        "srl_nokia-linux:linux": {
          "import-routes": true,
          "export-routes": true,
          "export-neighbors": true
        }
      }
    }
  ],
  "srl_nokia-routing-policy:routing-policy": {
    "policy": [
      {
        "name": "export-all",
        "default-action": {
          "accept": {
            
          }
        }
      },
      {
        "name": "import-all",
        "default-action": {
          "accept": {
            
          }
        }
      }
    ]
  },
  "srl_nokia-tunnel-interfaces:tunnel-interface": [
    {
      "name": "vxlan1",
      "vxlan-interface": [
        {
          "index": 1,
          "type": "srl_nokia-interfaces:bridged",
          "ingress": {
            "vni": 1
          }
        },
        {
          "index": 2,
          "type": "srl_nokia-interfaces:bridged",
          "ingress": {
            "vni": 2
          }
        },
        {
          "index": 3,
          "type": "srl_nokia-interfaces:bridged",
          "ingress": {
            "vni": 3
          }
        },
        {
          "index": 4,
          "type": "srl_nokia-interfaces:routed",
          "ingress": {
            "vni": 4
          }
        }
      ]
    }
  ]
}