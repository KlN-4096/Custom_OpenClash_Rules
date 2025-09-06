function FindProxyForURL(url,host){
    // 代理地址
    var proxy = "PROXY 192.168.31.45:7890";
    // 直接访问不使用代理
    var DIRECT = "DIRECT";
    // 目标主机是否本机
    if(isPlainHostName(host)){
        return DIRECT;
    }
    // 目标主机是否zhihu.com, 可以匹配 `www.zhihu.com,abc.zhihu.com`等
    if(dnsDomainIs(host,"mojang.com")){
        return proxy;
    }
    if(dnsDomainIs(host,"google.com")){
        return proxy;
    }
    if(dnsDomainIs(host,"minecraft.net")){
        return proxy;
    }
    // 直接访问
    return DIRECT;
}