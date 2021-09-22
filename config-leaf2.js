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
                "ip-prefix": "10.1.2.1/31"
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
                "ip-prefix": "10.2.2.1/31"
              }
            ]
          }
        }
      ]
    },
    {
      "name": "ethernet-1/3",
      "admin-state": "enable"
    },
    {
      "name": "ethernet-1/8",
      "description": "Created for testing",
      "admin-state": "enable"
    },
    {
      "name": "ethernet-1/12",
      "admin-state": "enable",
      "srl_nokia-interfaces-vlans:vlan-tagging": true,
      "subinterface": [
        {
          "index": 0,
          "type": "srl_nokia-interfaces:bridged",
          "admin-state": "enable",
          "srl_nokia-interfaces-vlans:vlan": {
            "encap": {
              "single-tagged": {
                "vlan-id": 10
              }
            }
          }
        },
        {
          "index": 1,
          "type": "srl_nokia-interfaces:bridged",
          "admin-state": "enable",
          "srl_nokia-interfaces-vlans:vlan": {
            "encap": {
              "single-tagged": {
                "vlan-id": 20
              }
            }
          }
        }
      ]
    },
    {
      "name": "ethernet-1/13",
      "admin-state": "enable",
      "srl_nokia-interfaces-vlans:vlan-tagging": true,
      "subinterface": [
        {
          "index": 0,
          "type": "srl_nokia-interfaces:bridged",
          "admin-state": "enable",
          "srl_nokia-interfaces-vlans:vlan": {
            "encap": {
              "single-tagged": {
                "vlan-id": 10
              }
            }
          }
        },
        {
          "index": 1,
          "type": "srl_nokia-interfaces:bridged",
          "admin-state": "enable",
          "srl_nokia-interfaces-vlans:vlan": {
            "encap": {
              "single-tagged": {
                "vlan-id": 20
              }
            }
          }
        }
      ]
    },
    {
      "name": "ethernet-1/14",
      "admin-state": "enable",
      "srl_nokia-interfaces-vlans:vlan-tagging": true,
      "subinterface": [
        {
          "index": 0,
          "type": "srl_nokia-interfaces:bridged",
          "admin-state": "enable",
          "srl_nokia-interfaces-vlans:vlan": {
            "encap": {
              "single-tagged": {
                "vlan-id": 10
              }
            }
          }
        },
        {
          "index": 1,
          "type": "srl_nokia-interfaces:bridged",
          "admin-state": "enable",
          "srl_nokia-interfaces-vlans:vlan": {
            "encap": {
              "single-tagged": {
                "vlan-id": 20
              }
            }
          }
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
                "ip-prefix": "172.16.101.1/24",
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
      "name": "lo1",
      "description": "Loopback Interface",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "admin-state": "enable",
          "ipv4": {
            "address": [
              {
                "ip-prefix": "6.5.3.2/32"
              }
            ]
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
                "ip-prefix": "1.1.1.2/32"
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
              "action": "read"
            },
            {
              "path-reference": "network-instance ip-vrf1 protocols bgp",
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
            "password": "$ar2$OOf4O6lPuF8=$yRusMq7S9lynRYTwIa1DHg==",
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
          "key": "$aes$aUzBMYOmSH44=$EhJ4999KHEds1WulDZDn3xEtm+ow1GRwUpSAd9Q++qNaD4hAqb1oQVcjluJfzaJSTwfXXevhp7CmNxRR44AyDKQP0a+hEJh/kzWdkeC1ZKmvtD+RGmTxmDyLrISVCXcAQkat5Wxh994ZJYf7NIPO38c48IB7s8sqgUtGrDtBazwPKrCy5gOZ/JaRFyYMDX12A1FdEFDNJpoX5ZRqjbuOh1gC7uF/qMtvmen56YbfXC+UvtMpBPg2C0yMW4qglXwiLUzFmNREsbve1vH7Zm3ovpqMAmcDF5yUC2I9xG7LPEAiNPWVgmEEoXwxeXgpHUko5kj+VoCGgCScz/gsAp3Xp0zorSvSmdzAtZJ5qktKz5EZ3U8Prt4VC6pplQwWLt2vMvSwh74LZCSteWHAb7++xaxOFm3kQmbpgH4Snq2HyQibqyAWPHK4xWjP2wpv6QcVDkbtc2b9aVB6CxOy53wtkaptbFt1Ql3uozW7qqPpUzm+Xfx+k0EJKTd976sCyfYDK7fiOSo7oofDofG/XwHF0WzFW2lhHAe2Ow3y/uqEQeX3B+VcUKVQWFhfxkjxOg6xuESIc1vXWHB4TXn9kBi0t/HTPjAtKw3CVtVvVap6fREIv7HE45pNHmp/vAMNwGq/rq7vddEdnJ8HFz5dO6XWEQiL7WG/cerX90b2QoLBHFqKytsA52HvxsUNLIqiWf6NQ/3qt/UryCZQxyMIg63X3X6gYpY/cZZcPJCzpn4dADO7ebnksO7vxkMlAsnH0uTulA7j7quqDxxay4dV0rKM2WNM03X5HOdr4B2u2MvDFZua2JfllZLxO+3vHSpdMkemHrJxwbwaH4D4ZzD6EhiuUCS0Axz+cKGqQnj2cww3JerokJ5SxuXhQkXml/HX3NNNTpahjF7aZEQ0aDkpQbYoQ+2A4Z5XBoFogiFWaRC5DdDiY1wjatsmJUbCifxDqmpP14RLAD3t78bIIlJpOwf9S4WguSVlP3JgXb+weVRtzOm3gSZb0+UIiNB8S5RBQtBiYSqY03CU3vcwP0ZnS2cDwQsrD1XcigWaG03KYCGMCzZ0vANZhsq3sUe8LOkX5ISbto591YZCNPGySHDH2Sv3ZcSZJ76YvSTDDxqGsaxlz2NnNnolEwx0h6YRoBMMswunNUx6//VG3tK3OniI2R5URt3lu/+kIt0k+3QKllpM4UWMw/hf14bYX+GAGnOX5Og9E/FVMGLy5KQxah0XYNjqM3MRRKN4Kh/l8E7eOXpupUSAN2eft5MkgCR9XKSQDWXiFSc8SC/oBKSPIay8qpS12804j5b2zbOHuLDLpMElaJ/iR2Jv6svbhG+forZVm9O7S2clq2MPxyOQtOIgnebnrs/oeZ84N9SFggD0W2c+zzi7GPypuZU8MJH27SpUl1vnmCH94oUUC95pzeNcmfrzVwK4+qG2PYPz0T8AbvMiB8XrU2ApRFVV6oXkLVnTpuSnL3/HT+mjXnfOGwNbkwQkDFZTR0vWSUvCwyK8XmgjCmCh73g/yCagDY24oUboEUVu1Yr7BZd4CnAH/I5mkM60ChbpctX7PsIzVVVIJhaQV7wYZVBvJSt/ZFLVRUPqmMBpW49IdrPFJjn1knkJfvheC6F50oqw89St1d+eCxrJFIRU3Rb1gx9ZqQQxsV3ZOYGtrYf0fF211/7/sfOgj92t2rzzQmcKsRS+92d5673qhk0SAh1nEWg8n3WYF7FopjxcXAd7xPv61097jx1NAbyIQCw2QHWFTM7Vz1YxOAcb7wlb/MIUeISF4a9xkKQM3IJ8/vtr+A+jlng73xnqlabME3zXaI2ZE0Z8nFOePfQfzOw5J4ehu1A92scx145Q/1ZOOsP2giZmDyySXNsVzu+jMHQPLVjmFAjXFDhZMUkDf1RGIBxyGsxzR/UBv2bXjr+MEHVWiL5oaWQ60r/mZOzHH3Ihz+LmfdcWihOtBNaXHMDTulW91LQgQXRzTxjlHTjHCBU00Do00soePxI9oSbrmcODUiL9ehUpGLBSENwt31mnYAF3/VVNVq84jvy8HpwQZjw2ud2pIYoC+3WjMskP8elUF+D6uANyG3xXu8RcnQezuhw2oIT5M2arf30t1AJPLO5YkYH7Z4yLKmN7T9Frl8K6MIhlHSE4V2ONHIuHu1C3pqam7rmUWVCk25IrhYd3arUJjaxWsDHb2z4yShO1ItzA67ElpK9Wb3CKsGI09tG32gpfr1rc6eJe0BNpoy+c",
          "certificate": "-----BEGIN CERTIFICATE-----\nMIIDpjCCAo6gAwIBAgIJAOMhrE6Rcp66MA0GCSqGSIb3DQEBCwUAMH4xCzAJBgNV\nBAYTAlVTMQ4wDAYDVQQIDAVUZXhhczEPMA0GA1UEBwwGRGFsbGFzMQ4wDAYDVQQK\nDAVOb2tpYTELMAkGA1UECwwCTkkxDTALBgNVBAMMBG15Q0ExIjAgBgkqhkiG9w0B\nCQEWE21hdS5yb2phc0Bub2tpYS5jb20wHhcNMjEwNjE3MTYyNDQ0WhcNMjQwNDA2\nMTYyNDQ0WjBbMQswCQYDVQQGEwJVUzEOMAwGA1UECAwFVGV4YXMxDzANBgNVBAcM\nBkRhbGxhczEOMAwGA1UECgwFTm9raWExCzAJBgNVBAsMAk5JMQ4wDAYDVQQDDAVs\nZWFmMjCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMRmR1c6TirBQaHT\nW/3k3Ma0WNH1WV4G+grqmn3QEqSynTOS+veN8NA0G7r454PrRp6eI6UTgs8nJO7G\n4kSPEgSnJ+CAJ2uL0kqGpk6trjyTNC0qpzhmdN/q4lVy4vrVY4crTe1EhGndalWE\nfODfGumCjx5DpL+snLRl1DtOIGlgbB9UqnzzeHs1WR1CX1gVdsadgLsSLNCSbpGH\nAdR0GmiW0LTrbMPccMmE6pKbSHKqkumukVppNbxJyWHmTs9cfvmlNEv6V4orS7U4\nWpvN1VKXs2Om+5DvQD/NJbqm7U8Ge6RcfE96Cd2NvkOEdhfv+Cdtc2PAYR6FtDGs\nFirAGOECAwEAAaNKMEgwCQYDVR0TBAIwADALBgNVHQ8EBAMCBeAwHQYDVR0lBBYw\nFAYIKwYBBQUHAwEGCCsGAQUFBwMCMA8GA1UdEQQIMAaHBKwUFAUwDQYJKoZIhvcN\nAQELBQADggEBAIRy1WK0C9+cti1KVqM5hxObc9cAh+LBvMQGh2a3OIYBufb28wYs\nPzlEr5nxfSgyz+MUjiakwbo9KryfXDGQlJkDLeIOlS4qHVGdqmA4V4HOn3dx41nA\noNhP9cCuxuyOMtbstaII6wm3wjR7pTcMD8sttZflwHAOmoJczJQfKLoOXx6Yj7S2\n1hbKfPkvhA1QhwqFqZ/Tzo6DqLxnbxMt+8YqpaJrv2zIsCP4lcG1CnfLl6D0dFFK\nqY9m07HPLAcgtV2AablZ7+h5jfZmQWoX0DiY48ld8Xbxug7niNTZ2XmkcTYDCsh/\nlENFNwftTtxZ1eg0yb4Ycwm6CGWJV8EYe1w=\n-----END CERTIFICATE-----",
          "authenticate-client": false,
          "trust-anchor": "-----BEGIN CERTIFICATE-----\nMIIDzzCCAregAwIBAgIJAKkjJjxkuZNhMA0GCSqGSIb3DQEBCwUAMH4xCzAJBgNV\nBAYTAlVTMQ4wDAYDVQQIDAVUZXhhczEPMA0GA1UEBwwGRGFsbGFzMQ4wDAYDVQQK\nDAVOb2tpYTELMAkGA1UECwwCTkkxDTALBgNVBAMMBG15Q0ExIjAgBgkqhkiG9w0B\nCQEWE21hdS5yb2phc0Bub2tpYS5jb20wHhcNMjEwNjE3MTYyNDQzWhcNMjQwNDA2\nMTYyNDQzWjB+MQswCQYDVQQGEwJVUzEOMAwGA1UECAwFVGV4YXMxDzANBgNVBAcM\nBkRhbGxhczEOMAwGA1UECgwFTm9raWExCzAJBgNVBAsMAk5JMQ0wCwYDVQQDDARt\neUNBMSIwIAYJKoZIhvcNAQkBFhNtYXUucm9qYXNAbm9raWEuY29tMIIBIjANBgkq\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsNyXZKd0kvc9KWsHGWg3GG69bxhFRiCl\neTyS/USW06VrZpSaSn0aro5dNY9tkZpyOJoEfSRuuMS2YssqfsWcG8YrARUvxgNc\n+2fwOICE/dATpKwgKR46cH90lzJwpRLs6raOKdYnx0ULdn4jBwR70X4T3EPbU6CM\nT2QfXYMNbaIzKVeW81EBOhqXZX+KfuPU2UZwHJ2iid7ad7/Yjr9bJhM3aqknBmMz\nWC+eOGLHtuPaMC1kQzIaFUY+asP93h1x0nqEtaMGik7EI6AcGfDl+a/7sEHUkune\nOCxVg1M8qtulVCzJ7YdzCSxtBHcUgEpPNSGjd4jHObnW+wPpO5BoCwIDAQABo1Aw\nTjAdBgNVHQ4EFgQUXpUZfZ/TGAs88q06lR0hu28JLgYwHwYDVR0jBBgwFoAUXpUZ\nfZ/TGAs88q06lR0hu28JLgYwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQsFAAOC\nAQEAe9CxzH1FBoKouyM/aVDO+8E0u20I0SgbDjScWkoY4swpDlPkBa3fMYghMY+e\namlgEBq/n16s6N0U4H5SRZ6hydrFlMcsYqQX77nXJ2sQLJf5U0MoXf6zuL5A2rU/\nrbyjIC5y1U8LlSl6/iTD978uOtHtxaG/ErvJra78mYPL45/NIC/sOQv27H08zu9H\nNzu+jdZoCDfmYKYJV4HnhP88Wg2bfkIRvYBqIOwYGv1Td1CM1oYKfrd2tnEa4b1q\n+P5nQXz4LfW9Qp33cTZ3oqWKV5Zu0+2tRAniNNQCEIGlo8TKFmwJFj3staygCbie\nAVfmPw8IhwzPa8QBijnJC3lN2w==\n-----END CERTIFICATE-----"
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
          "autonomous-system": 65002,
          "router-id": "1.1.1.2",
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
              "peer-address": "10.1.2.0",
              "admin-state": "enable",
              "peer-group": "eBGP-underlay"
            },
            {
              "peer-address": "10.2.2.0",
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
      "interface": [
        {
          "name": "irb0.0"
        },
        {
          "name": "lo1.0"
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
        "srl_nokia-bgp:bgp": {
          "autonomous-system": 65320,
          "router-id": "6.5.3.2",
          "dynamic-neighbors": {
            "accept": {
              "match": [
                {
                  "prefix": "6.4.5.0/26",
                  "peer-group": "metallb-bgp",
                  "allowed-peer-as": [
                    "65201"
                  ]
                },
                {
                  "prefix": "192.168.101.0/24",
                  "peer-group": "calico-bgp",
                  "allowed-peer-as": [
                    "64512"
                  ]
                }
              ]
            }
          },
          "ebgp-default-policy": {
            "import-reject-all": false,
            "export-reject-all": false
          },
          "group": [
            {
              "group-name": "calico-bgp",
              "admin-state": "enable",
              "export-policy": "export-calico",
              "import-policy": "import-all",
              "timers": {
                "minimum-advertisement-interval": 1
              },
              "transport": {
                "local-address": "6.5.3.2"
              }
            },
            {
              "group-name": "metallb-bgp",
              "admin-state": "enable",
              "export-policy": "export-all",
              "import-policy": "import-all",
              "timers": {
                "minimum-advertisement-interval": 1
              },
              "transport": {
                "local-address": "6.5.3.2"
              }
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
      },
      "srl_nokia-static-routes:static-routes": {
        "route": [
          {
            "prefix": "6.4.5.20/32",
            "next-hop-group": "wk-a1"
          },
          {
            "prefix": "6.4.5.21/32",
            "next-hop-group": "wk-a2"
          },
          {
            "prefix": "6.4.5.22/32",
            "next-hop-group": "wk-a3"
          },
          {
            "prefix": "6.4.5.30/32",
            "next-hop-group": "ctl-a1"
          },
          {
            "prefix": "6.4.5.31/32",
            "next-hop-group": "ctl-a2"
          },
          {
            "prefix": "6.4.5.32/32",
            "next-hop-group": "ctl-a3"
          }
        ]
      },
      "srl_nokia-next-hop-groups:next-hop-groups": {
        "group": [
          {
            "name": "ctl-a1",
            "admin-state": "enable",
            "nexthop": [
              {
                "index": 1,
                "ip-address": "192.168.101.30"
              }
            ]
          },
          {
            "name": "ctl-a2",
            "admin-state": "enable",
            "nexthop": [
              {
                "index": 1,
                "ip-address": "192.168.101.31"
              }
            ]
          },
          {
            "name": "ctl-a3",
            "admin-state": "enable",
            "nexthop": [
              {
                "index": 1,
                "ip-address": "192.168.101.32"
              }
            ]
          },
          {
            "name": "wk-a1",
            "admin-state": "enable",
            "nexthop": [
              {
                "index": 1,
                "ip-address": "192.168.101.20"
              }
            ]
          },
          {
            "name": "wk-a2",
            "admin-state": "enable",
            "nexthop": [
              {
                "index": 1,
                "ip-address": "192.168.101.21"
              }
            ]
          },
          {
            "name": "wk-a3",
            "admin-state": "enable",
            "nexthop": [
              {
                "index": 1,
                "ip-address": "192.168.101.22"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "mac-vrf1",
      "type": "srl_nokia-network-instance:mac-vrf",
      "admin-state": "enable",
      "interface": [
        {
          "name": "ethernet-1/12.0"
        },
        {
          "name": "ethernet-1/13.0"
        },
        {
          "name": "ethernet-1/14.0"
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
          "name": "ethernet-1/12.1"
        },
        {
          "name": "ethernet-1/13.1"
        },
        {
          "name": "ethernet-1/14.1"
        },
        {
          "name": "irb0.1"
        }
      ],
      "vxlan-interface": [
        {
          "name": "vxlan1.6"
        }
      ],
      "protocols": {
        "bgp-evpn": {
          "srl_nokia-bgp-evpn:bgp-instance": [
            {
              "id": 1,
              "admin-state": "enable",
              "vxlan-interface": "vxlan1.6",
              "evi": 6
            }
          ]
        },
        "srl_nokia-bgp-vpn:bgp-vpn": {
          "bgp-instance": [
            {
              "id": 1,
              "route-target": {
                "export-rt": "target:65123:6",
                "import-rt": "target:65123:6"
              }
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
    "prefix-set": [
      {
        "name": "calico-network-10.96",
        "prefix": [
          {
            "ip-prefix": "10.96.0.0/12",
            "mask-length-range": "12..32"
          }
        ]
      },
      {
        "name": "calico-network-172",
        "prefix": [
          {
            "ip-prefix": "172.0.0.0/8",
            "mask-length-range": "8..32"
          }
        ]
      },
      {
        "name": "calico-network-192-168",
        "prefix": [
          {
            "ip-prefix": "192.168.0.0/16",
            "mask-length-range": "16..32"
          }
        ]
      },
      {
        "name": "k8s-loop-6.4.5",
        "prefix": [
          {
            "ip-prefix": "6.4.5.0/26",
            "mask-length-range": "26..32"
          }
        ]
      }
    ],
    "policy": [
      {
        "name": "export-all",
        "default-action": {
          "accept": {
            
          }
        }
      },
      {
        "name": "export-calico",
        "default-action": {
          "reject": {
            
          }
        },
        "statement": [
          {
            "sequence-id": 10,
            "match": {
              "prefix-set": "calico-network-172"
            },
            "action": {
              "accept": {
                
              }
            }
          },
          {
            "sequence-id": 30,
            "match": {
              "prefix-set": "calico-network-10.96"
            },
            "action": {
              "accept": {
                
              }
            }
          }
        ]
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
          "index": 4,
          "type": "srl_nokia-interfaces:routed",
          "ingress": {
            "vni": 4
          }
        },
        {
          "index": 6,
          "type": "srl_nokia-interfaces:bridged",
          "ingress": {
            "vni": 6
          }
        }
      ]
    }
  ]
}