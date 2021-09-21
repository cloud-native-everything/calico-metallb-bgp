#Calico and MetalLB working together with BGP

When we want to make Calico and MetalLB working together with BGP, we'll run into the following issue: BGP only allows one session to be established per pair of nodes. So, if Calico has a session established with your BGP router, MetalLB cannot establish its own session – it’ll get rejected as a duplicate by BGP’s conflict resolution algorithm.

In this case, I wanted to keep using the ToR (Top of Rack) routers for the LoadBalancer instead of Spines as it's normally proposed. Basically, because if you use overlay networks in a Fabric, Spines could be managed as router reflectors for EVPN-iBGP and transport for VxLANs.

My Setup is using Calico and MetalLB working together with BGP in Kubernetes v1.20.5. My Cluster was installed with kubeadm with control-planes/master redundancy on Fedora 34 (Kernel version 5.13.4-200). I am using cri-o as my container runtime.

More details at my [blog post in cloud-native-eveything.com ](https://www.cloud-native-everything.com/calico-and-metal…ogether-with-bgp/)
