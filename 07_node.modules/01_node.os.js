// 모듈을 추출합니다.
var os = require('os');

// 모듈을 사용합니다.
console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.uptime());
console.log(os.loadavg());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.networkInterfaces());

/*

DONGHYUNs-MacBook-Pro.local
Darwin
darwin
x64
16.7.0
3287789
[ 1.736328125, 1.8544921875, 1.8359375 ]
17179869184
5243977728
[ { model: 'Intel(R) Core(TM) i7-4770HQ CPU @ 2.20GHz',
    speed: 2200,
    times: { user: 6422290, nice: 0, sys: 5297740, idle: 30743100, irq: 0 } },
  { model: 'Intel(R) Core(TM) i7-4770HQ CPU @ 2.20GHz',
    speed: 2200,
    times: { user: 709680, nice: 0, sys: 461250, idle: 41266700, irq: 0 } },
  { model: 'Intel(R) Core(TM) i7-4770HQ CPU @ 2.20GHz',
    speed: 2200,
    times: { user: 5737180, nice: 0, sys: 2947330, idle: 33762340, irq: 0 } },
  { model: 'Intel(R) Core(TM) i7-4770HQ CPU @ 2.20GHz',
    speed: 2200,
    times: { user: 731440, nice: 0, sys: 480050, idle: 41223290, irq: 0 } },
  { model: 'Intel(R) Core(TM) i7-4770HQ CPU @ 2.20GHz',
    speed: 2200,
    times: { user: 5755750, nice: 0, sys: 2955850, idle: 33731990, irq: 0 } },
  { model: 'Intel(R) Core(TM) i7-4770HQ CPU @ 2.20GHz',
    speed: 2200,
    times: { user: 732420, nice: 0, sys: 481540, idle: 41218120, irq: 0 } },
  { model: 'Intel(R) Core(TM) i7-4770HQ CPU @ 2.20GHz',
    speed: 2200,
    times: { user: 5719070, nice: 0, sys: 2924290, idle: 33797150, irq: 0 } },
  { model: 'Intel(R) Core(TM) i7-4770HQ CPU @ 2.20GHz',
    speed: 2200,
    times: { user: 730490, nice: 0, sys: 478600, idle: 41221130, irq: 0 } } ]
{ lo0:
   [ { address: '127.0.0.1',
       netmask: '255.0.0.0',
       family: 'IPv4',
       mac: '00:00:00:00:00:00',
       internal: true,
       cidr: '127.0.0.1/8' },
     { address: '::1',
       netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
       family: 'IPv6',
       mac: '00:00:00:00:00:00',
       scopeid: 0,
       internal: true,
       cidr: '::1/128' },
     { address: 'fe80::1',
       netmask: 'ffff:ffff:ffff:ffff::',
       family: 'IPv6',
       mac: '00:00:00:00:00:00',
       scopeid: 1,
       internal: true,
       cidr: 'fe80::1/64' } ],
  en0:
   [ { address: 'fe80::401:2b5d:ac9d:612b',
       netmask: 'ffff:ffff:ffff:ffff::',
       family: 'IPv6',
       mac: 'ac:bc:32:9a:7c:21',
       scopeid: 4,
       internal: false,
       cidr: 'fe80::401:2b5d:ac9d:612b/64' },
     { address: '192.168.0.177',
       netmask: '255.255.255.0',
       family: 'IPv4',
       mac: 'ac:bc:32:9a:7c:21',
       internal: false,
       cidr: '192.168.0.177/24' } ],
  awdl0:
   [ { address: 'fe80::3cde:f7ff:fef5:25cc',
       netmask: 'ffff:ffff:ffff:ffff::',
       family: 'IPv6',
       mac: '3e:de:f7:f5:25:cc',
       scopeid: 6,
       internal: false,
       cidr: 'fe80::3cde:f7ff:fef5:25cc/64' } ],
  utun0:
   [ { address: 'fe80::a5cd:fc09:e28d:ca71',
       netmask: 'ffff:ffff:ffff:ffff::',
       family: 'IPv6',
       mac: '00:00:00:00:00:00',
       scopeid: 10,
       internal: false,
       cidr: 'fe80::a5cd:fc09:e28d:ca71/64' } ] }
    
*/