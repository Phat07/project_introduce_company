import { AppstoreOutlined, DesktopOutlined, PhoneOutlined, ToolOutlined } from '@ant-design/icons';

export const solutions = [
  // Viễn thông
  {
    id: 1,
    title: 'GIẢI PHÁP TỔNG ĐÀI CLOUD',
    category: 'telecom',
    image: '/images/solutions/tongdai.jpg',
    description: 'Tổng đài ảo là một thuật ngữ không còn lạ ở thời đại công nghệ 4.0, với các nền tảng công nghệ VoIP, AI, Big Data, IoT,… đã góp phần thúc đẩy phát triển sự tiên tiến trong lĩnh vực voice (thoại) nói chung và customer service (chăm sóc khách hàng) nói riêng, giúp giảm chi phí triển khai và chi phí thoại hơn 80%, giảm tối đa thởi gian chăm sóc. Tổng đài ảo là dịch vụ điện thoại sử dụng internet trên nền mạng IP thay vì sử dụng đường dây điện. Điều đặc biệt hơn là tổng đài ảo cloud được sử dụng trên nền tảng đám mây nên đầu kết nối là IP(địa chỉ mạng) giúp việc lắp đặt rất đơn giản là chỉ cần có Internet và cần trang bị các thiết bị như điện thoại IP Phone, máy tính hoặc laptop(có thể gọi trên website, hay cài ứng dụng softphone), điện thoại Smartphone(cài app trên điện thoại),… và chỉ cần có internet là có thể truy cập tổng đài mọi lúc mọi nơi.',
    features: [
      'Sử dụng trên nền internet',
      'Số lượng user lớn, mở rộng linh hoạt',
      'Tích hợp nhiều đầu số 1900,1800, cố định, di động',
      'Lời chào (có hỗ trợ tương tác thoại IVR)',
      'Nhạc chờ mặc định',
      'Nhạc chờ riêng cho khách hàng VIP',
      'Đặt password (pin) cho cuộc gọi ra',
      'Định tuyến gọi ra theo khung giờ',
      'Transfer (chuyển máy)',
      'Call pickup (Rước cuộc gọi)',
      'Call forward (chuyển tiếp cuộc gọi):dùng trong trường hợp không ngồi trực tiếp nghe máy được, ngoài giờ làm việc, hoặc các ngày nghỉ lễ tết. Hệ thống sẽ dung số sip di động hoặc cố định để chuyển tiếp cuộc gọi đến số sim được chỉ định.',
      'Gọi nội bộ miễn phí giữa các User, phòng ban, chi nhánh',
      'Chặn cuộc gọi phá rối (backlist)',
      'Giới hạn hướng gọi. (Nội bộ, nội hạt, liên tỉnh, di động, quốc tế…)',
      'Đổ chuông theo nhóm (Ringgroup), Queues (hàng đợi).',
      'Định tuyến cuộc gọi theo thời gian',
      'Định tuyến cuộc gọi cho KH VIP (có thể chuyển cuộc gọi những KH này trực tiếp đến người phụ trách mà không phải chờ đợi)',
      'Kết nối nhiều văn phòng, chi nhánh, chuỗi cữa hàng',
      'Hộp thư thoại Voicemail (để lại lời nhắn sau tiếp bip)',
      'Audio conference(chức năng hội nghị phòng họp audio)',
      'Ghi âm cuộc gọi (vào, ra, nội bộ)',
      'Thời gian ghi âm (cam kết 03 tháng - có thể mở rộng theo nhu cầu khách hàng)',
      'Tài khoản quản lý cuộc gọi trên web',
      'Hỗ trợ tìm kiếm theo số điện thoại, số line, thời gian cuộc gọi vào ra…',
      'Nghe trực tiếp file ghi âm từ trình duyệt web'
    ],
    benefits: [
      'Không phải đầu tư, vận hành hệ thống tổng đài.',
      'Toàn bộ hệ thống tổng đài được Viettel vận hành một cách chuyên nghiệp và bảo mật cao.',
      'Dễ dàng trong việc mở rộng máy nhánh.',
      'Triển khai nhanh chóng, tiết kiệm thời gian.',
      'Chi phí thấp, cước gọi siêu tiết kiệm.',
      'Không bị giới hạn vùng địa lý.',
      'Chất lượng cuộc gọi cao, ổn định.',
      'Không bị giới hạn cuộc gọi.',
      'Dễ dàng mở rộng năng lực.',
      'Kết nối cuộc gọi tại bất kỳ đâu từ Smartphone, Tablet.',
      'Không cần cấu hình phức tạp, thời gian triển khai nhanh.'
      
    ],
    pricing: [
      {
        name: 'Combo TCS_FTTH_01',
        bandwidth: 'Băng thông quốc tế: 1Mbps & Băng thông trong nước: 90Mbps',
        users: '10 User truy cập',
        router: 'Trang bị Router & Hỗ trợ cầu hình thiết bị Router',
        setupFee: 'Chi phí hòa mạng 1 triệu (Cài đặt tổng đài & triển khai Leased Line Internet)',
        price: '1.200.000 đ/tháng (Chưa bao gồm VAT)',
        paymentTerm: '6 tháng hoặc 12 tháng/lần'
      },
      {
        name: 'Combo TCS_FTTH_02', 
        bandwidth: 'Băng thông quốc tế: 1Mbps & Băng thông trong nước: 90Mbps',
        users: '20 User truy cập',
        router: 'Trang bị Router & Hỗ trợ cầu hình thiết bị Router',
        setupFee: 'Chi phí hòa mạng 1 triệu (Cài đặt tổng đài & triển khai Leased Line Internet)',
        price: '1.700.000 đ/tháng (Chưa bao gồm VAT)',
        paymentTerm: '6 tháng hoặc 12 tháng/lần'
      },
      {
        name: 'Combo TCS_FTTH_03',
        bandwidth: 'Băng thông quốc tế: 1Mbps & Băng thông trong nước: 90Mbps', 
        users: '30 User truy cập',
        router: 'Trang bị Router & Hỗ trợ cầu hình thiết bị Router',
        setupFee: 'Chi phí hòa mạng 1 triệu (Cài đặt tổng đài & triển khai Leased Line Internet)',
        price: '2.200.000 đ/tháng (Chưa bao gồm VAT)',
        paymentTerm: '6 tháng hoặc 12 tháng/lần'
      }
    ]
  },
  {
    id: 2,
    title: 'Kênh thuê riêng',
    category: 'telecom',
    image: '/images/solutions/kenhthue.png',
    description: 'Dịch vụ Kênh thuê riêng là dịch vụ cung cấp đường kết nối vật lý dành riêng cho khách hàng sử dụng cáp quang để truyền thông tin giữa các điểm cố định trong nước theo phương thức kết nối điểm – điểm. Khách hàng sẽ không bị chia sẻ băng thông tại mọi thởi điểm.',
    features: [
      'Mô hình kết nối: Kết nối điểm - điểm hoặc điểm - đa điểm',
      'Hạ tầng kết nối: Dịch vụ kênh thuê riêng triển khai trên hạ tầng SDH'
    ],
    advantage: [
      'TÙY BIẾN THEO NHU CẦU: Khách hàng có thể thuê kênh với tốc độ thấp nhất từ 64Kb/s tới không giới hạn với các giao tiếp mạng chuẩn.',
      'HỖ TRỢ VÀ XỬ LÝ SỰ CỐ NHANH: Thời gian tiếp nhận sự cố <0.5h, thời gian xử lý sự cố 2h-6h, thời gian hỗ trợ 24/7/365.',
      'CHẤT LƯỢNG TỐT NHẤT: Với mạng lưới cáp quang phủ khắp tất cả các huyện trên toàn quốc với cấu trúc đảm bảo tính vu hồi cao, các khách hàng sử dụng kênh thuê riêng trong nước hoặc quốc tế sẽ được đảm bảo chất lượng và mức độ dự phòng tốt nhất.',
      'ĐỘ ỔN ĐỊNH CAO NHẤT: Do triển khai trên mạng lưới viễn thông quốc tế hiện đại, được bố trí dự phòng ở mức cao nhất. Độ khả dụng dịch vụ đạt 99.99%, cam kết tỉ lệ lỗi là nhỏ nhất 10-4%.',
      'ĐỘ LINH HOẠT: Dễ dàng nâng cấp dung lượng/tốc độ, cung cấp nhiều loại giao tiếp khác nhau: FE, V.35, G.703, BNC, LC…',
      'ĐỘ BẢO MẬT: Cao nhất triển khai kênh điểm-điểm dành riêng cho khách hàng.'
    ]
  },
  {
    id: 3,
    title: 'GIẢI PHÁP MẠNG RIÊNG ẢO TỐC ĐỘ CAO (METRO WAN)',
    category: 'telecom',
    image: '/images/solutions/metroWan.png',
    description: 'MetroWan là dịch vụ cung cấp mạng riêng ảo (VPN: Virtual private network Layer 2) với mục đích truyền dữ liệu dành cho doanh nghiệp có nhiều chi nhánh, trụ sở trên toàn quốc dựa trên hạ tầng MPLS/VPN (Multi-Protocol Label Switching/Virtual Private Network) của Viettel, nhằm đáp ứng các nhu cầu truyền dữ liệu (data, voice, video …vv) tốc độ cao và bảo mật giữa hai hay nhiều điểm chi nhánh của khách hàng.',
    features: [
      'QUY HOẠCH IP: IP có thể do Khách hàng tự quy hoạch hoặc Viettel quy hoạch',
      'Kết nối điểm – đa điểm (Point to Multipoint).',
      'Kết nối điểm – điểm (Point to point).',
      'Kết nối đa điểm – đa điểm (MultiPoint to Multipoint).',
      'Kết nối Fullmesh.',
      'Phù hợp với đối tượng khách hàng có khả năng quản trị hệ thống mạng nội bộ (như: Ngân hàng, đơn vị Bộ Ban Ngành, Công ty về lĩnh vực CNTT).'
    ],
    advantage: [
      'TIẾT KIỆM CHI PHÍ: Dịch vụ Metrowan giúp khách hàng thiết lập mạng riêng với chi phí thấp do chỉ tạo kết nối ảo. Tất cả các điểm có thể liên hệ trực tiếp với nhau với chỉ một kết nối vật lý duy nhất tại mỗi địa điểm',
      'TÍNH LINH HOẠT: Sử dụng dịch vụ này khách hàng dễ dàng mở rộng mô hình, tăng thêm điểm kết nối, tăng băng thông, tốc độ trong thời gian sử dụng mà không cần phải thay đổi mô hình hay kiến trúc mạng',
      'TÍNH BẢO MẬT CAO: Kết nối giữa các điểm được mã hóa, gán nhãn và thiết lập đường hầm (tunnel) riêng trên hệ thống mạng lõi của Viettel.'
    ]
  },
  {
    id: 4,
    title: 'GIẢI PHÁP MẠNG RIÊNG ẢO (OFFICE WAN)',
    category: 'telecom',
    image: '/images/solutions/officeWan.jpg',
    description: 'Office Wan là dịch vụ cung cấp mạng riêng ảo (VPN: Virtual private network Layer 3) với mục đích truyền dữ liệu dành cho doanh nghiệp có nhiều chi nhánh, trụ sở trên toàn quốc dựa trên hạ tầng MPLS/VPN (Multi-Protocol Label Switching/ Virtual Private Network) của Viettel.',
    features: [
      'QUY HOẠCH IP: IP có thể do KH tự quy hoạch hoặc Viettel quy hoạch',
      'Kết nối điểm – điểm (Point to point)',
      'Kết nối điểm – đa điểm (Point to Multipoint)',
      'Kết nối full mesh.'
    ],
    advantage: [
      'TIẾT KIỆM CHI PHÍ: Dịch vụ Office Wan giúp khách hàng thiết lập mạng riêng với chi phí thấp do chỉ tạo kết nối ảo. Tất cả các điểm có thể liên hệ trực tiếp với nhau với chỉ một kết nối vật lý duy nhất tại mỗi địa điểm.',
      'TÍNH LINH HOẠT: Sử dụng dịch vụ này khách hàng dễ dàng mở rộng mô hình, tăng thêm điểm kết nối, tăng băng thông, tốc độ trong thời gian sử dụng mà không cần phải thay đổi mô hình hay kiến trúc mạng.',
      'TÍNH BẢO MẬT CAO: Kết nối giữa các điểm được mã hóa, gán nhãn và thiết lập đường hầm (tunnel) riêng trên hệ thống mạng lõi của Viettel.'
    ]
  },
  {
    id: 5,
    title: 'GIẢI PHÁP HỘI NGHỊ TRUYỀN HÌNH',
    category: 'telecom',
    image: '/images/solutions/hnth.jpg',
    description: 'Hội nghị truyền hình (HNTH) là dịch vụ truyền tải âm thanh, hình ảnh, chia sẻ dữ liệu, nội dung giữa 2 hay nhiều địa điểm từ xa qua đường truyền mạng, giúp các điểm cùng đồng thởi liên lạc hai chiều như đang trong cùng một phòng họp. Dịch vụ HNTH thường được sử dụng để kết nối cho các cuộc họp, thảo luận, đào tạo trực tuyến,… giữa các điểm với nhau. ',
    features: [
      'TỔ CHỨC HỌP:\n- Tổ chức họp vào bất kỳ thời gian nào.\n- Hình ảnh sắc nét đạt chuẩn HD/FullHD',
      'CHẤT LƯỢNG:\n- Âm thanh đa hướng, trung thực.',
      'TÍCH HỢP TÍNH NĂNG:\n- Tích hợp với hệ thống trang âm của Phòng họp.\n- Chia sẻ slide, dữ liệu trình chiếu dễ dàng.\n- Ghi lại nội dung cuộc họp.\n- Đơn giản trong sử dụng, vận hành'
    ],
    advantage: [
      'KINH NGHIỆM: Viettel là đơn vị có kinh nghiệm tư vấn thiết kế, triển khai và quản trị vận hành các hệ thống HNTH lớn nhất của Việt Nam với quy mô lên đến nghìn điểm cầu, cung cấp cho nhiều đơn vị Doanh nghiệp và khách hàng trọng yếu.',
      'KHẢ NĂNG CUNG CẤP: Có thể cung cấp các giải pháp của nhiều hãng cung cấp trên thế giới như: Polycom, Avaya - Radvision, Cisco, Aver, Cypresscom Veda,… để đáp ứng theo yêu cầu của khách hàng'
    ],
    benefits: [
      'GIẢM THỜI GIAN: Giảm thời gian, rủi ro di chuyển',
      'TIẾT KIỆM CHI PHÍ: Tiết kiệm chi phí tổ chức',
      'THỰC HIỆN KẾT NỐI: Thực hiện kết nối được nhiều địa điểm khác nhau',
      'NHANH CHÓNG: Nhanh chóng tổ chức các cuộc họp;…'
    ]
  },
  {
    id: 6,
    title: 'TIN NHẮN THƯƠNG HIỆU (SMS BRANDNAME)',
    category: 'telecom',
    image: '/images/solutions/sms.png',
    description: 'Sms Brandname là dịch vụ cho phép các Cơ quan/tổ chức/doanh nghiệp/Cá nhân gửi thông tin nội bộ, tin nhắn chăm sóc khách hàng hoặc quảng cáo bằng cách gửi tin nhắn trực tiếp tới các thuê bao di động của các doanh nghiệp viễn thông bằng hình thức hiển thị thương hiệu (tên định danh) từ người gửi thay cho tin nhắn bằng đầu số.',
    features: [
      // 'Hiển thị tên thương hiệu',
      // 'Gửi tin nhắn hàng loạt',
      // 'Tích hợp API linh hoạt'
    ],
    advantage: [
      'TIẾT KIỆM, HIỆU QUẢ: Doanh nghiệp không tốn kém các chi phí thiết kế, in ấn phẩm, nguồn nhân lực; giúp doanh nghiệp truyền thông trực tiếp tới đối tượng cần nhận thông tin.',
      'ĐẶC BIỆT TRUYỀN THÔNG ĐƯỢC THƯƠNG HIỆU: Tin nhắn gửi tới nhân viên hoặc khách hàng luôn hiển thị thương hiệu của cơ quan/tổ chức/doanh nghiệp do đó giúp các đơn vị quảng bá thương hiệu.',
      'TIẾP CẬN KHÁCH HÀNG CHÍNH XÁC THEO TIÊU CHÍ VÀ ĐỊA ĐIỂM: Tin nhắn được gửi đến đúng tập khách hàng mục tiêu nhằm nâng cao hiệu quả truyền thông thông qua hệ thống tin nhắn LBS (Location-based service)'
    ],
    benefits: [
      'LINH HOẠT PHÙ HỢP: Sử dụng tiện ích, giải pháp linh hoạt phù hợp cho mọi đơn vị:\n\n - Cách 1: Gửi tin nhắn hàng loạt qua website/app được cung cấp miễn phí.\n - Cách 2: Các ứng dụng của dịch vụ được lập trình cài đặt sẵn trên SMS Gateway của doanh nghiệp, khi đó tin nhắn sẽ được cung cấp cho khách hàng một cách tự động (Cần có nhân viên IT quản trị, lập trình hệ thống). '
    ]
  },
  {
    id: 7,
    title: 'DỊCH VỤ THOẠI TRÊN NỀN VOIP CHO DOANH NGHIỆP',
    category: 'telecom',
    image: '/images/solutions/voip.jpg',
    description: 'Dịch vụ trung kế SIP là dịch vụ kênh trung kế thoại sử dụng giao thức SIP 2.0 (Session Initiation Protocol). Dịch vụ trung kế SIP được chia làm 2 loại: Trung kế SIP đầu số cố định (1800, 1900, PSTN, IPPhone): sử dụng kênh truyền để kết nối đầu số 1800, 1900, PSTN, IPPhone với tổng đài IP PBX có hỗ trợ giao thức SIP của khách hàng. Trung kế SIP đầu số di động (09xxx/086xxx): sử dụng kênh truyền',
    features: [
      // 'Chi phí cuộc gọi thấp',
      // 'Tích hợp nhiều thiết bị',
      // 'Chất lượng cuộc gọi cao'
    ],
    advantage:[
      'TIẾT KIỆM CHI PHÍ: Chi phí thấp, cước gọi siêu tiết kiệm',
      'VÙNG ĐỊA LÝ: Không bị giới hạn vùng địa lý',
      'CHẤT LƯỢNG CUỘC GỌI: Chất lượng cuộc gọi cao, ổn định',
      'KHÔNG GIỚI HẠN: Không bị giới hạn cuộc gọi',
      'MỞ RỘNG NĂNG LỰC: Dễ dàng mở rộng năng lực',
      'INTERNET: Tất cả chỉ cần 1 đường Internet',
      'KẾT NỐI CUỘC GỌI: Kết nối cuộc gọi tại bất kỳ đâu từ Smartphone, Tablet',
      'TRIỂN KHAI NHANH: Không cần cấu hình phức tạp, thời gian triển khai nhanh.'
    ],
    benefits: [
      'VẬN HÀNH: Toàn bộ hệ thống tổng đài được Viettel vận hành một cách chuyên nghiệp và bảo mật cao.',
      'MỞ RỘNG: Dễ dàng trong việc mở rộng máy nhánh.',
      'TIẾT KIỆM THỜI GIAN: Triển khai nhanh chóng, tiết kiệm thời gian.'
    ]
  },
  {
    id: 8,
    title: 'DỊCH VỤ TRUNG KẾ SỐ (E1)',
    category: 'telecom',
    image: '/images/solutions/e1.png',
    description: 'Dịch vụ Trung kế số (E1) là dịch vụ cung cấp đường truyền kết nối giữa tổng đài của các đơn vị cung cấp dịch vụ viễn thông đến tổng đài nội bộ của khách hàng. Mỗi đường trung kế cho phép thiết lập 30 cuộc gọi đồng thởi cùng lúc.',
    features: [
      // 'Băng thông 2Mbps',
      // '30 kênh thoại đồng thởi',
      // 'Chất lượng cuộc gọi ổn định'
    ],
    advantage: [
      'HẠ TẦNG: Triển khai trên hạ tầng cáp quang',
      'BĂNG THÔNG: Mỗi luồng trung kế E1 có băng thông 2Mbps',
      'SỐ THOẠI: Không giới hạn các số thoại khai trên 01 luồng Trung kế E1',
      'KÊNH THOẠI: Thực hiện đồng thời 30 kênh thoại, mỗi kênh tốc độ 64 kbps (2048 kbps = 32 x 64 kbps) và 02 kênh báo hiệu.',
      'TRIỂN KHAI: Điều kiện để triển khai dịch vụ: Tổng đài của khách hàng phải có cổng giao tiếp E1, sử dụng báo hiệu SS7 hoặc R2.'
    ],
    benefits: [
      'CHẤT LƯỢNG CAO: Trung kế số E1 thiết lập kênh truyền dẫn trực tiếp từ tổng đài chuyển mạch trung tâm của nhà cung cấp dịch vụ đến tổng đài PABX của khách hàng, không qua các tổng đài trung gian, nên chất lượng cuộc gọi cao và bảo mật thông tin tốt hơn hẳn so với điện thoại thông thường.',
      'TÍN HIỆU ỔN ĐỊNH: Trung kế số E1 được triển khai bằng sợi cáp quang nên không bị ảnh hưởng bởi các yếu tố môi trường bên ngoài, tín hiệu thoại luôn ổn định.',
      'TỐI ƯU CHI PHÍ: Sử dung trung kế số E1 có cước thấp hơn hẳn so với dịch vụ PSTN thông thường.',
      'LINH HOẠT HƠN: Dễ dàng mở rộng hệ thống điện thoại của doanh nghiệp chỉ trên một tín hiệu vào và có thể mở rộng số lượng thuê bao không giới hạn.'
    ]
  },
  {
    id: 9,
    title: 'DỊCH VỤ DCOM',
    category: 'telecom',
    image: '/images/solutions/dcom.png',
    description: 'Dịch vụ Dcom: Là dịch vụ truy cập internet trên nền 4G/3G có tính cơ động với tốc độ cao.',
    features: [
      // 'Tốc độ cao',
      // 'Phủ sóng rộng',
      // 'Kết nối linh hoạt'
    ],
    advantage: [
      'HỆ THỐNG QUẢN LÝ BÁN HÀNG: Trang bị cho kênh bán hàng, kênh phân phối truy cập vào hệ thống quản lý bán hàng của doanh nghiệp.',
      'KHẢ NĂNG TRUY CẬP LƯU ĐỘNG: Trang bị cho cán bộ nhân viên truy cập mạng trong trường hợp cần lưu động hoặc không có hạ tầng mạng cố định (ADSL/FTTH).',
      'PHÁT WIFI: Sử dụng để phát wifi cho cán bộ nhân viên, cho khách hàng sử dụng, cho xe khách,...'
    ],
    benefits:[
      'TỐC ĐỘ CAO: Truy cập mạng tốc độ cao 3G/4G.',
      'CƠ ĐỘNG: Có vùng phủ sóng rộng nhất đáp ứng đặc thù di chuyển của cán bộ nhân viên.',
      'HIỆU QUẢ: Tăng hiệu quả bán hàng, tối ưu chi phí cho doanh nghiệp.',
      'TRUY CẬP THEO YÊU CẦU: Đáp ứng định tuyến truy cập theo các đích, truy cập mạng nội bộ tùy theo yêu cầu của Doanh nghiệp.'
    ]
  },
  {
    id: 10,
    title: 'DỊCH VỤ ĐẦU SỐ 1900',
    category: 'telecom',
    image: '/images/solutions/1900.jpg',
    description: 'Dịch vụ đầu số 1900 của Viettel là dịch vụ tổng đài chăm sóc khách hàng cho doanh nghiệp, cho phép tiếp nhận 1 hoặc nhiều cuộc gọi đến đồng thởi thông qua một số điện thoại duy nhất trên toàn quốc mang đầu số 1900.',
    features: [
      // 'Số điện thoại dễ nhớ',
      // 'Tiếp nhận nhiều cuộc gọi',
      // 'Tính phí người gọi'
    ],
    advantage: [
      'TÍNH PHÍ: Tính phí người gọi theo đơn giá cước của đầu số 1900.',
      'ĐIỀU KIỆN SỬ DỤNG: Khách hàng phải có sẵn một trong các loại dịch vụ của Viettel để tiếp nhận cuộc gọi của 1900 là: PSTN, IPPHONE, Trung kế E1, SIP Trunking, Di động hoặc Homephone.'
    ],
    benefits: [
      'LỢI ÍCH ĐỐI VỚI KHÁCH HÀNG THỰC HIỆN CUỘC GỌI/NHẮN TIN:\n\n - Có thể gọi tại bất kỳ nơi nào; Khách hàng gọi tới các chi nhánh của doanh nghiệp không cần phải sử dụng mã vùng.\n - Đầu số duy nhất trên toàn quốc và dễ nhớ.',
      'ÐỐI VỚI DOANH NGHIỆP VÀ TỔ CHỨC THUÊ ĐẦU SỐ 1900:\n\n - Khẳng định thương hiệu, tính chuyên nghiệp của doanh nghiệp.\n - Là loại hình kinh doanh hiệu quả qua mạng điện thoại thông qua các dịch vụ tư vấn hoặc giải trí, chăm sóc khách hàng.\n - Dễ dàng quảng bá với một số điện thoại duy nhất truy nhập cho tất cả các chi nhánh trên toàn quốc.\n - Tiếp nhận đồng thời nhiều cuộc gọi cùng 1 lúc.'
    ]
  },
  {
    id: 11,
    title: 'LEASEDLINE INTERNET',
    category: 'telecom',
    image: '/images/solutions/leased-internet.png',
    description: 'Leasedline Internet là dịch vụ cung cấp kết nối Internet trực tiếp có cổng kết nối quốc tế riêng biệt, được triển khai trên hạ tầng cáp quang, có khả năng đáp ứng mọi nhu cầu về tốc độ của khách hàng.',
    features: [
      'HẠ TẦNG: Triển khai trên hạ tầng cáp quang, định tuyến ưu tiên. Với cổng kết nối quốc tế lên đến hàng trăm Gbps.',
      'ĐA DỊCH VỤ: Với 8 IP tĩnh được cung cấp miễn phí, khách hàng có thể triển khai các ứng dụng chất lượng cao như: Mạng riêng ảo (VPN), hội nghị truyền hình (Video Conference), thiết lập và quản lý hệ thống Mail Server và Web Server....',
      'TỐC ĐỘ KẾT NỐI: Thực hiện nâng hạ tốc độ dễ dàng không cần thay đổi đầu cuối và mô hình kết nối của Khách hàng.',
      'HỖ TRỢ KỸ THUẬT: Hỗ trợ kỹ thuật trực tiếp 24/24.',
      'CHẤT LƯỢNG BĂNG THÔNG: Băng thông cung cấp cho khách hàng luôn đạt 100% tại mọi thời điểm.',
      'TRANG BỊ THIẾT BỊ: Công ty trang bị thiết bị cho khách hàng trong quá trình sử dụng dịch vụ.\n Công ty trang bị thiết bị cho khách hàng trong quá trình sử dụng dịch vụ.'
    ]
  },
  {
    id: 12,
    title: 'DỊCH VỤ INTERNET CÁP QUANG (FTTH)',
    category: 'telecom',
    image: '/images/solutions/ftth.png',
    description: 'Dịch vụ Internet Cáp quang FTTH (Fiber-To-The-Home) là dịch vụ hiện đại nhất giúp truy cập Internet tốc độ cao dựa trên nền tảng công nghệ cáp quang.',
    features: [
      'CÔNG NGHỆ QUANG: Triển khai trên nền tảng công nghệ quang',
      'CHẤT LƯỢNG ĐƯỜNG TRUYỀN: Chất lượng đường truyền ổn định, ít suy hao',
      'TỐC ĐỘ TẢI: Tốc độ download/upload bằng nhau, phục vụ cùng một lúc cho nhiều máy vi tính'
    ],
    advantage: [
      'TÍNH AN TOÀN: Cáp quang không dẫn điện, an toàn cho thiết bị, không sợ sét đánh lan truyền trên đường dây dẫn.',
      'DỄ DÀNG NÂNG CẤP BĂNG THÔNG: Dịch vụ FTTH của Viettel có thể nâng cấp băng thông dễ dàng mà không cần kéo cáp mới.',
      'ĐA DỊCH VỤ: Có thể chạy nhiều dịch vụ trên cùng sợi cáp'
    ]
  },
  {
    id: 13,
    title: 'DỊCH VỤ MIỄN CƯỚC NGƯỜI GỌI 1800',
    category: 'telecom',
    image: '/images/solutions/1800.jpg',
    description: 'Dịch vụ miễn cước người gọi – 1800 là giải pháp tư vấn các sản phẩm, dịch vụ cho khách hàng hiệu quả nhất. Khách hàng của các doanh nghiệp được MIỄN PHÍ các cuộc gọi tới đầu số 1800xxxx của doanh nghiệp đó.',
    features: [
      // 'Miễn phí cho người gọi',
      // 'Xây dựng thương hiệu',
      // 'Tiếp nhận đa cuộc gọi'
    ],
    advantage: [
      'CHẤP NHẬN TẤT CẢ CUỘC GỌI: Dịch vụ miễn cước người gọi – 1800 chấp nhận tất cả các cuộc gọi từ thuê bao di động, cố định của các nhà mạng khác nhau trên toàn quốc.',
      'TRIỂN KHAI: Không phải triển khai ngoại vi (kéo cáp, lắp đặt phía khách hàng)',
      'ĐIỀU KIỆN SỬ DỤNG DỊCH VỤ: Khách hàng phải sử dụng các dịch vụ thoại có dây của Viettel: PSTN, NGN, Trung kế (sử dụng làm số đích 1800xxxx định tuyến đến)',
      'ĐỊNH TUYẾN: Các cuộc gọi tới 1800xxxx được định tuyến đến số điện thoại đích'
    ],
    benefits: [
      'THÚC ĐẨY DOANH THU: Dịch vụ miễn phí cuộc gọi sẽ kích thích khách hàng quan tâm tới sản phẩm, dịch vụ nhiều hơn làm gia tăng tương tác giữa doanh nghiệp với khách hàng',
      'TÍNH CHUYÊN NGHIỆP: Dịch vụ giúp các tổ chức, doanh nghiệp khẳng định tính chuyên nghiệp với 01 đầu số duy nhất, dễ nhớ cho tất cả các chi nhánh, văn phòng khác nhau trên toàn quốc',
      'KHẲNG ĐỊNH THƯƠNG HIỆU: Tạo kênh thông tin gắn liền với thương hiệu của các tổ chức, doanh nghiệp, xuyên suốt quá trình phát triển.',
      'TÍNH LINH HOẠT: Chỉ cần một đầu số cho tất cả các sản phẩm, dịch vụ và không giới hạn về sự gia tăng về sản phẩm, dịch vụ trong tương lai.'
    ]
  },
  {
    id: 14,
    title: 'GIẢI PHÁP THIẾT LẬP MẠNG ẢO (SD-WAN)',
    category: 'telecom',
    image: '/images/solutions/sd-wan.jpg',
    description: 'SD-WAN là giải pháp thiết lập mạng Wan (ảo) trên hệ thống mạng vật lý truyền thống như FTTx, LTE/5G hay MPLS dựa trên phần mềm với độ linh hoạt cao, triển khai nhanh và vận hành thuận tiên hơn so với giải pháp truyền thống.',
    features: [
      // 'Quản lý tập trung',
      // 'Tối ưu băng thông',
      // 'Bảo mật cao'
    ],
    advantage: [
      'CẤU HÌNH: Cấu hình, định tuyến và giám sát tập trung.',
      'KHẢ NĂNG CHIA TẢI: Có khả năng chia tải, chọn kết nối có chất lượng tốt.',
      'KẾT NỐI: Hỗ trợ nhiều kết nối khác nhau',
      'QOS THEO TỪNG DỊCH VỤ'
    ],
    benefits: [
      'TĂNG HIỆU QUẢ QUẢN TRỊ: Toàn bộ được quản trị tập trung, tích hợp giải pháp DPI (Deep packet inspection) giúp phân tích gói tin tới mức người dùng, đánh giá xu hướng người dùng để điều chỉnh các chính sách cấu hình. Hỗ trợ công cụ phân tích các nguy cơ bảo mật của hệ thống.',
      'TỐI ƯU MẠNG LƯỚI: Định tuyến linh hoạt dựa trên các SLA hệ thống (jitter, latency, packet loss...), có thể đưa ra các chính sách định tuyến tới mức ứng dụng giúp tối ưu được mạng lưới.',
      'HIỆU SUẤT ỨNG DỤNG CAO: Nhận biết trên 2000 ứng dụng, từ đó đưa ra các chính sách QoS đảm bảo các ứng dụng sản xuất kinh doanh luôn được ưu tiên.',
      'BẢO MẬT CAO: Tích hợp sẵn các tính năng Firewall như App Control, IPS/IDS, Anti Virus, URL filtering, sandbox, SSL Inspection.',
      'TRIỂN KHAI NHANH VÀ LINH HOẠT: Toàn bộ cấu hình được thực hiện từ xa và tính năng Zero touch provisioning giúp giảm thời gian tích hợp. Hỗ trợ triển khai đồng thời nhiều đường truyền khác nhau của các nhà mạng',
      'KHẢ DỤNG CAO: Hỗ trợ share tải trên nhiều đường truyền (LTE/5G/MPLS/FTTx) giúp tăng độ khả dụng của hệ thống.'
    ]
  },
  {
    id: 15,
    title: 'THOẠI QUỐC TẾ',
    category: 'telecom',
    image: '/images/solutions/international-call.jpg',
    description: 'TRA CỨU GIÁ CƯỚC Quý khách có thể tra cứu giá cước Thoại Quốc tế theo tên Quốc gia và mã Quốc gia tại đây Giá đăng ký : Theo đầu số Cước thuê bao tháng: Theo đầu số Phương thức tính cước dịch vụ: 6 giây +1 (6s+1): Cuộc gọi chưa đến 6 giây đầu tính cước bằng 6 giây. Phần lẻ thởi gian cuối cùng của 1 cuộc liên lạc chưa đến 01 giây làm tròn thành 01 giây. 60 giây + 60 giây (60s+60s): Cuộc gọi chưa đến 60 giây tính bằng cuộc gọi 60 giây. Phần lẻ thởi gian cuối cùng của 1 cuộc liên lạc chưa đến 01 giây làm tròn thành 60 giây. Cước gọi quốc đến các quốc gia và vùng lãnh thổ trên thế giới (*) Lưu ý: Các quốc gia áp dụng block tính cước đặc biệt 60s+60s bao gồm: American Samoa, Western Samoa, Cook Islands, French Polynesia, Gambia, Haiti, Kiribati, Lesotho, Mexico, Nauru, New Caledonia, Niue Island, Papua New Guinea, Solomon Islands, Suriname, Togo, Tokelau, Tonga, Tuvalu, Vanuatu và các đầu số vệ tinh',
    features: [
      'Cước phí cạnh tranh',
      'Kết nối toàn cầu',
      'Chất lượng âm thanh tốt'
    ]
  },
  // CNTT
  {
    id: 16,
    title: 'GIẢI PHÁP RPA',
    category: 'it',
    image: '/images/solutions/rpa.jpg',
    description: 'Dịch vụ Viettel RPA (Robotic Process Automation) là dịch vụ cung cấp giải pháp tự động hóa quy trình dựa trên robot phần mềm, cung cấp cho doanh nghiệp nguồn lực lao động mới (Digital workforce) giúp cải thiện năng suất và tăng trải nghiệm khách hàng. Robot được thiết kế để xử lý các công việc có khối lượng lớn, lặp đi lặp lại trong doanh nghiệp, ứng dụng với hàng ngàn quy trình thuộc tất cả các nhóm chức năng như CSKH, kế toán, mua sắm, nhân sự, quản lý chuỗi cung ứng…. ',
    features: [
      // 'Quản lý tài chính',
      // 'Quản lý nhân sự',
      // 'Quản lý kho vận'
    ]
  },
  {
    id: 17,
    title: 'Quản Trị Vận Hành',
    category: 'it',
    image: '/images/solutions/quantrivanhanh.jpg',
    description: 'Dịch vụ quản trị (Managed Service) là dịch vụ quản trị, điều hành hệ thống máy chủ doanh nghiệp đồng thởi hỗ trợ người sử dụng trong việc sử dụng máy tính hàng ngày',
    features: [
      'HỆ THỐNG GIÁM SÁT: Các thiết bị, máy chủ được giám sát 24/24 bằng cách thiết lập quy trình tự động SMS, cảnh báo màu, tiếng động đến các kỹ sư chuyên trách của Viettel Solutions để can thiệp ngay lập tức nếu có sự cố. Viettel Solutions cũng sẽ gửi báo cáo thống kê mức sử dụng tài nguyên đến khách hàng, đề xuất tinh chỉnh tối ưu hóa khi cần thiết.',
      'CẬP NHẬT HỆ THỐNG ĐỊNH KỲ: Kiểm tra và cập nhật các bản vá lỗi định kỳ, cập nhật hệ điều hành và phiên bản mới của các phần mềm dịch vụ, phát hiện và xử lý ngay lập tức các trường hợp thiết bị, máy chủ bị quá tải, lỗi phần cứng, dịch vụ bị treo, lỗi hệ thống,...',
      'XỬ LÝ LỖ HỔNG BẢO MẬT: Viettel Solutions sẽ tích hợp trong hệ thống quản trị công cụ tự động kiểm tra các lỗi bảo mật có khả năng phân tích mức độ bảo mật của mã nguồn sử dụng, phân tích các phương thức khi có dấu hiệu bị tấn công phá hoại, từ đó Viettel Solutions sẽ chủ động triển khai các biện pháp phòng chống thích hợp kịp thời.',
      'HỖ TRỢ CÁC VẤN ĐỀ LIÊN QUAN ĐẾN THIẾT BỊ, MÁY CHỦ: Ngoài quản trị hệ thống, Viettel Solutions sẽ hỗ trợ khách hà ng một số vấn đề liên quan như xác định cấu hình máy chủ nhằm đáp ứng yêu cầu của mã nguồn Website, xác định nguyên nhân lỗi truy cập của Website trên máy chủ, phân tích hiệu năng và tư vấn, đề xuất các cấu hình thiết bị, máy chủ phù hợp với nhu cầu của khách hàng.'
    ],
    advantage: [
      'ĐA DẠNG DỊCH VỤ: Cung cấp đa dạng các loại dịch vụ: Quản trị máy chủ, Quản trị bảo mật, Nâng cấp hạ tầng IT, Tư vấn…',
      'TIẾT KIỆM CHI PHÍ: Tiết kiệm chi phí đầu tư thiết bị, công cụ quản trị, chi phí nhân sự và đào tạo.',
      'HỖ TRỢ 24/7: Công cụ quản trị hiện đại. Hệ thống trợ giúp sẵn sàng hỗ trợ 24/7.',
      'CHẤT LƯỢNG DỊCH VỤ: Viettel cam kết chất lượng dịch vụ với các SLA tương đương và tốt hơn so với các nhà cung cấp dịch vụ hàng đầu thế giới.',
      'CHI PHÍ: vMS giúp doanh nghiệp tối ưu chi phí vận hành khai thác hệ thống CNTT tối thiểu 30% so với trước đây nhờ vào khả năng tự động hóa và quản trị tập trung.'      
    ],
    benefits:[
      'HỢP ĐỒNG DUY NHẤT: Khách hàng chỉ cần duy nhất một hợp đồng có thể quản trị toàn bộ hệ thống CNTT bất kể có bao nhiêu điểm sử dụng.',
      'CHI PHÍ LINH HOẠT: Chi phí trả theo nhu cầu sử dụng và quy mô hệ thống.',
      'ĐỘI NGŨ CHUYÊN NGHIỆP: Được hỗ trợ bởi một đội ngũ IT chuyên nghiệp nên không phụ thuộc vào năng lực của bất kỳ cá nhân nào.',
      'MỨC GIÁ ƯU ĐÃI: Được tư vấn miễn phí về hệ thống CNTT và hưởng các mức giá ưu đãi khi có nhu cầu đầu tư hoặc nâng cấp hệ thống.'
    ]
  },
  {
    id: 18,
    title: 'DMS.LITE – Giải pháp bán hàng chuyên nghiệp',
    category: 'it',
    image: '/images/solutions/dms.png',
    description: 'Là giải pháp quản lý hệ thống bán hàng trực tuyến cho các doanh nghiệp từ trụ sở công ty đến các giám sát, các nhân viên bán hàng trên thị trường',
    features: [
      'Giám sát lộ trình:\n\n - Định vị vị trí nhân viên mọi lúc, mọi nơi\n - Quản lý chặt chẽ lộ trình dịch chuyển, thời gian làm việc của nhân viên bán hàng.',
      'Quản lý bán hàng:\n\n - Đặt hàng trực tuyến qua internet, 3G hoặc 4G…\n - Quản lý doanh số từng nhân viên một cách tức thời\n - Quản lý và chăm sóc Khách hàng hiệu quả\n - Quản lý sản phẩm không giới hạn\n - Thiết lập KPI/ Kế hoạch bán hàng\n - Chủ động xây dựng chương trình khuyến mãi hợp lý tại từng thời điểm\n - Quản lý kho hàng, đơn hàng một cách khoa học',
      'Báo cáo điều hành:\n\n - Báo cáo giám sát\n - Báo cáo doanh số\n - Báo cáo kho',
      'Bám sát thị trường:\n\n - Cập nhật thông tin tức thời\n - Nhận phản ánh từ khách hàng một cách nhanh chóng\n - Tiếp nhận hình ảnh thực tế từ thị trường'
    ],
    advantage: [
      'QUY TRÌNH KHÉP KÍN: Quy trình đồng bộ khép kín (Đặt đơn hàng online -> Duyệt đơn hàng -> in đơn hàng -> Giao hàng) và bảo mật vượt trội',
      'KINH NGHIỆM TRIỂN KHAI: Sản phẩm đã triển khai thành công cho các công ty có hệ thống phân phối lớn nhất Việt Nam….',
      'SẢN PHẨM BÁN KÈM: Viettel có khả năng bán kèm phần mềm, thiết bị và sim 3G.',
      'THIẾT KẾ ĐƠN GIẢN, DỄ SỬ DỤNG: Sản phẩm được thiết kế đơn giản, dễ sử dụng. Giao diện đa ngôn ngữ.',
      'HỆ THỐNG BÁN HÀNG: Kênh bán hàng rộng khắp trên 63 tỉnh thành trong cả nước.',
      'CHĂM SÓC KHÁCH HÀNG: Hệ thống chăm sóc khách hàng tốt nhất, tư vấn, hỗ trợ 24/7 qua tổng đài.'
    ],
    benefits: [
      'Đối với nhà quản lý:\n\n - Nắm bắt thông tin thị trường một cách tức thời\n - Chủ động xây dựng chương trình khuyến mãi hợp lý tại từng thời điểm.\n - Quản lý kho hàng, đơn hàng một cách khoa học.\n - Quản lý chặt chẽ lộ trình dịch chuyển, thời gian làm việc cũng như doanh số từng nhân viên một cách tức thời.\n - Hệ thống báo cáo đầy đủ, bao quát toàn bộ hoạt động của hệ thống kinh doanh',
      'Đối với nhân viên:\n\n - Đặt hàng trực tuyến qua internet, 3G hoặc 4G…\n - Tự động thống kê doanh số, chỉ tiêu hàng ngày và lũy kế.\n - Cập nhật tức thời các thông tin từ người Quản lý về sản phẩm mới cũng như các trương trình hỗ trợ thương mại.\n - Giảm thiểu thời gian tổng hợp viết báo cáo, nâng cao hiệu quả công việc.'
    ]
  },
  {
    id: 19,
    title: 'QUẢN LÝ HỆ THỐNG PHÂN PHỐI (DMS.ONE)',
    category: 'it',
    image: '/images/solutions/dmsOne.jpg',
    description: 'DMS.ONE là giải pháp phần mềm quản lý hệ thống phân phối hàng hóa trực tuyến có thể áp dụng cho: Nhà sản xuất - Nhà phân phối - Đại lý - Điểm bán lẻ. Thông qua hệ thống DMS.ONE, nhà phân phối cung cấp thông tin khách hàng, sản phẩm, khuyến mãi, thực hiện xuất nhập kho cho từng nhân viên bán hàng cung cấp hàng hóa đến các nhà bán lẻ như siêu thị, cửa hàng tiện lợi, đại lý, tạp hóa…để đến tay người tiêu dùng dưới sự quản lý của giám sát bán hàng. Các đơn hàng, hình ảnh và vấn đề phát sinh của khách hàng luôn được cập nhật theo thời gian thực. Mô hình phân phối này sẽ giúp hoạt động bán hàng nhanh chóng, chính xác, hiệu quả và dễ quản lý hơn.',
    features: [
      'QUẢN LÝ VÀ CHĂM SÓC KHÁCH HÀNG: Hệ thống cập nhật dữ liệu nhanh chóng, xác định vị trí khách hàng trên bản đồ để quản lý và chăm sóc. Phần mềm DMS.ONE của Viettel với các tính năng ưu việt phân chia và quản lý khách hàng theo từng nhóm thuộc tính riêng đặc trưng giúp cho việc tìm kiếm thông tin khách hàng vô cùng đơn giản.',
      'QUẢN LÝ SẢN PHẨM: DMS.ONE sẽ mang đến cho Doanh nghiệp giải pháp quản lý hàng hoá một cách có hệ thống thông qua các việc phân chia theo ngành hàng, nhãn hàng, khối lượng. Ngoài ra còn có thêm một số tính năng nâng cao trong việc quản lý theo các tiêu chuẩn của riêng Doanh nghiệp như: thành phần, hương vị...',
      'QUẢN LÝ KHO HÀNG HÓA: Hỗ trợ chủ Doanh nghiệp và kế toán nắm bắt hàng tồn, bổ sung hàng hóa kịp thời, cảnh báo khi số lượng hàng nhập/ xuất vượt mức cho phép của từng mặt hàng. Bên cạnh đó việc điều chỉnh hàng tồn kho giữa các nhà phân phối vô cùng đơn giản và nhanh chóng.',
      'ĐỐI TƯỢNG SỬ DỤNG: Lĩnh vực Áp dụng DMS.ONE là những doanh nghiệp bán hàng, phân phối như: Thực phẩm, tiêu dùng, Dược phẩm, y tế, Nông nghiệp, Đồ uống, nước giải khá, Điện tử, điện lạnh, Thiết bị vệ sinh'
    ]
  },
  {
    id: 20,
    title: 'HỆ THỐNG VĂN PHÒNG ĐIỆN TỬ (MOFFICE)',
    category: 'it',
    image: '/images/solutions/moffice.png',
    description: 'Hệ thống văn phòng điện tử Viettel Office là hệ thống Văn phòng thông minh dành cho Doanh nghiệp sử dụng trên đa nền tảng với mục tiêu quản lý các hoạt động hành chính chuyên nghiệp, hiện đại mà vẫn đảm bảo tính linh hoạt, đơn giản. Là tập đoàn đi đầu về chuyển đổi số, Viettel có nhiều kinh nghiệm triển khai hệ thống Văn phòng điện tử cho các Tập đoàn, ngân hàng, doanh nghiệp lớn trong và ngoài nước, có nhiều kinh nghiệm xử lý những vướng mắc doanh nghiệp gặp phải khi triển khai hệ thống.',
    features: [
      'QUẢN LÝ VĂN BẢN, HỒ SƠ, LỊCH LÀM VIỆC',
      'QUẢN LÝ TRUYỀN THÔNG',
      'QUẢN LÝ HỒ SƠ LƯU TRỮ'
    ],
    advantage: [
      'KHẢ NĂNG TÍCH HỢP: Tích hợp dễ dàng với các thiết bị số và nhiều hệ thống phần mềm của đơn vị.',
      'KHẢ NĂNG PHÂN QUYỀN: Phân quyền linh động, tính bảo mật cao.',
      'TRAO ĐỔI THÔNG TIN: Trao đổi thông tin nhanh chóng, chính xác, rút ngắn thời gian xử lý công việc'
    ],
    benefits:[
      'HIỆU QUẢ: Tăng hiệu quả sử dụng tài nguyên văn phòng.',
      'TIẾT KIỆM CHI PHÍ: Giảm chi phí mua giấy tờ, in ấn.',
      'TIẾT KIỆM THỜI GIAN: Giảm thời gian lưu trữ, vận chuyển công văn.',
      'KHẢ NĂNG ĐÁP ỨNG: Có khả năng đáp ứng được các quy trình quản lý phức tạp bằng công nghệ workflow.'
    ]
  },
  {
    id: 21,
    title: 'GIẢI PHÁP CHỨNG THỰC CHỮ KÝ SỐ (CA)',
    category: 'it',
    image: '/images/solutions/ca.jpg',
    description: 'Chứng thực chữ ký số là dịch vụ được sử dụng trong các giao dịch điện tử nhằm xác định danh tính của người ký, đảm bảo tính toàn vẹn và giá trị pháp lý giúp cho việc thực hiện các giao dịch điện tử từ xa qua Internet trở nên dễ dàng, đơn giản và bảo mật.',
    features: [
      'ĐA THIẾT BỊ: Ký trên mọi loại thiết bị (Desktop PC, Laptop, Mobile, Tablet)',
      'KÝ MỌI LÚC MỌI NƠI: Ngay cả khi đi công tác nước ngoài. Chỉ cần điện thoại kết nối Internet (Wifi, 2G/3G/4G). Xóa nhòa khoảng cách không gian, thời gian.'
    ],
    advantage: [
      'TÍNH DUY NHẤT: Là nhà cung cấp duy nhất có giải pháp ký trên sim di động.',
      'MẠNG LƯỚI: Mạng lưới, kênh bán rộng khắp.'
    ],
    benefits: [
      'THỰC HIỆN KÊ KHAI:\n\n - Kê khai, nộp thuế qua mạng.\n - Kê khai hải quan điện tử, bảo hiểm xã hội điện tử.',
      'TÍCH HỢP: Ngân hàng điện tử, chứng khoán điện tử, đấu thầu điện tử.',
      'THỰC HIỆN KÝ SỐ:\n\n - Ký kết hợp đồng và các giao dịch thương mại điện tử.\n - Ký số trên các hệ thống phần mềm nội bộ tổ chức, doanh nghiệp'
    ]
  },
  {
    id: 22,
    title: 'DỊCH VỤ QUẢN LÝ DANH TIẾNG REPUTA',
    category: 'it',
    image: '/images/solutions/reputa.png',
    description: 'Reputa là Hệ thống Giám sát và Phân tích thông tin trên môi trường mạng (báo điện tử, diễn đàn, blog, mạng xã hội: Facebook, Instagram, các kênh video Youtube... v.v…) ứng dụng các công nghệ trí tuệ nhân tạo tiên tiến nhất nhằm nắm bắt đến từng cá thể người dùng Internet.',
    features: [
      'PHÂN TÍCH THEO SẮC THÁI CẢM XÚC: Nhờ phân tích các nội dung thảo luận dựa trên sắc thái cảm xúc của người viết (Tích cực, Tiêu cực, Trung lập), Doanh nghiệp có thể hiểu rõ hơn thái độ của khách hàng với sản phẩm, dịch vụ. Từ đó phát hiện kịp thời các vấn đề cần quan tâm, xử lý.',
      'PHÂN TÍCH TOÀN DIỆN, TRỰC QUAN: Phân tích và so sánh hiệu quả bằng cách theo dõi các chỉ số chính, được hiển thị trực quan qua hệ thống biểu đồ thống kê. Nắm bắt sắc thái các thảo luận. Khám phá các chủ đề, xu hướng truyền thông nổi bật trênmạng xã hội.',
      'PHÂN LOẠI KHÁCH HÀNG: Tự động phân loại và hệ thống hóa chân dung các nhóm đối tượng thảo luận về sản phẩm, thương hiệu theo nhân khẩu học và địa lý. Hỗ trợ doanh nghiệp hiểu rõ về khán giả của mình trên mạng xã hội.',
      'XỬ LÝ THÔNG TIN: Xử lý ngôn ngữ tự nhiên kết hợp công nghệ máy học cùng “black keyword” có sẵn',
      'CẢNH BÁO: Cảnh báo định kỳ cho khách hàng: 5 Phút/Lần'
    ],
    advantage: [
      'GIÁM SÁT ĐA NGUỒN: Thu thập dữ liệu theo từ khóa hoặc nguồn tin. Dễ dàng theo dõi thông tin đến từ hơn 100 triệu nguồn tin mỗi ngày bao gồm mạng xã hội Facebook, Youtube, Báo chí và Trang tin điện tử, Forums và các website khác.',
      'THẤU HIỂU KHÁCH HÀNG: Phân tích đa chiều dữ liệu mạng xã hội liên quan đến thông tin sản phẩm, thương hiệu, hành vi người dùng. Cung cấp các biểu đồ thống kê trực quan dựa trên các chỉ số đánh giá hiệu quả hoạt động truyền thông, marketing và khắc họa chân dung khách hàng.',
      'CẢNH BÁO LINH HOẠT: Hệ thống cảnh báo được tùy chỉnh linh hoạt theo nhu cầu. Khách hàng dễ dàng tiếp nhận thông tin cảnh báo tức thời thông qua hệ thống Mobile App, Web, Email... Hệ thống báo cáo tự động giúp khách hàng giám sát hoạt động hiệu quả, tiết kiệm thời gian.'
    ],
    benefits: [
      'ĐỐI VỚI DOANH NGHIỆP:\n\n - Theo dõi thông tin nói về doanh nghiệp trên báo chí và mạng xã hội, từ đó phát hiện nhanh những thông tin bất lợi để đưa ra những giải pháp xử lý phù hợp, tránh khủng hoảng truyền thông ảnh hưởng xấu tới hình ảnh doanh nghiệp.\n - Có thể theo dõi thông tin về các đối thủ, từ đó đưa ra phương hướng kinh doanh phù hợp với các sản phẩm dịch vụ đối thủ cung cấp.\n - Chủ động chăm sóc những khách hàng phàn nàn về dịch vụ của doanh nghiệp cung cấp, từ đó tăng độ hài lòng và đem lại giá trị lớn hơn cho doanh nghiệp.',
      'ĐỐI VỚI CƠ QUAN NHÀ NƯỚC: \n\n - Thông tin được đồng bộ hóa và hiển thị theo thời gian thực.\n - Chính quyền giám sát thông tin trực tuyến về trật tự xã hội thông qua mạng xã hội.\n - Chính quyền giám sát thông tin về biểu tình, chống phá nhà nước.'
    ]
  },
  {
    id: 23,
    title: 'CLOUD WIFI MARKETING (VWIFI)',
    category: 'it',
    image: '/images/solutions/vwifi.jpg',
    description: 'vWifi là dịch vụ Wifi Marketing được triển khai trên nền Cloud, giúp cho doanh nghiệp có thể truyền tải các nội dung quảng cáo, các tương tác tới trực tiếp người dùng thông qua hạ tầng Wifi. Phù hợp với đối tượng khách hàng là các doanh nghiệp kinh doanh dịch vụ khách sạn, lữ hành và dịch vụ du lịch- nơi có nhu cầu cao về tương tác để quảng cáo tới khách hàng sử dụng dịch vụ.',
    features: [
      'TRUYỀN THÔNG THƯƠNG HIỆU: Quảng cáo với các kịch bản: poster, video.',
      'HỖ TRỢ THU THẬP THÔNG TIN: Thu thập thông tin: đăng nhập bằng tài khoản mạng xã hội, nhập thông tin cá nhân, khảo sát ý kiến.',
      'DỮ LIỆU: Quản lý, phân tích dữ liệu có được.',
      'THỰC HIỆN RE-MARKETING: Re-marketing trên tập khách hàng tiếp cận Wifi.',
      'QUẢN LÝ TRUY CẬP: Quản lý thời gian, băng thông và dung lượng truy cập đến từng người dùng.'
    ],
    advantage: [
      'NỀN TẢNG CLOUD: Dịch vụ triển khai trên nền Cloud nên doanh nghiệp không cần phải đầu tư thêm hạ tầng server, lưu trữ.',
      'ĐỘ TƯƠNG THÍCH CAO: Tương thích với mọi nhà cung cấp đường truyền internet và mọi hãng thiết bị phát sóng Wifi.'
    ]
  },
  {
    id: 24,
    title: 'GIẢI PHÁP WIFI CHO DOANH NGHIỆP',
    category: 'it',
    image: '/images/solutions/wifiver2.jpg',
    description: 'Thành Công Solutions cung cấp giải pháp wifi toàn diện, đảm bảo phủ sóng toàn bộ với độ bảo mật cao, tốc độ truy cập ổn định, và tích hợp nhiều tính năng theo yêu cầu.',
    features: [
      'TRUY CẬP: Tăng số người truy cập đồng thời.',
      'PHỦ SÓNG: Mở rộng vùng phủ sóng, giảm nhiễu giữa các mạng wifi.',
      'BẢO MẬT: Phân quyền truy cập và tăng độ bảo mật.',
      'TIỆN LỢI: Dễ dàng truy cập với 1 tên truy cập (SSID), người dùng có thể di chuyển giữa các bộ phát sóng (AP) mà không cần đăng nhập lại.',
      'QUẢN LÝ THÔNG TIN: Quản lý và thu thập thông tin người dùng: (thông tin đăng nhập, thông tin phản hồi.)',
      'TRIỂN KHAI ĐƠN GIẢN: Triển khai đơn giản (plug and play), hệ thống quản trị tập trung, giá thành không tăng so với giải pháp đơn lẻ tích hợp nhiều bộ phát wifi.'
    ],
    advantage: [],
    benefits: [
      'HIỆU NĂNG CAO',
      'ĐƠN GIẢN, DỄ SỬ DỤNG',
      'BẢO MẬT CAO'
    ]
  },
  // Hạ tầng số
  {
    id: 25,
    title: 'ĐÁM MÂY LAI HYBRID CLOUD',
    category: 'infrastructure',
    image: '/images/solutions/hybrid.jpg',
    description: 'Hybrid Cloud là mô hình điện toán đám mây kết hợp giữa đám mây riêng Private Cloud và đám mây công cộng Public Cloud. Hybrid Cloud đáp ứng được các nhu cầu về chuyển đổi dữ liệu qua lại giữa Private Cloud và Public Cloud khi có những yêu cầu thay đổi về chi phí, điện toán, bảo mật. Ngoài ra, Hybrid Cloud đem lại sự linh hoạt và nhiều tuỳ chọn trong việc triển khai dữ liệu hơn so với mô hình Private hay Public Cloud thông thường.',
    features: [
      // 'Bảo mật cao cấp',
      // 'Hiệu suất tối ưu',
      // 'Khả năng mở rộng'
    ],
    advantage: [
      'CHỦ ĐỘNG KIỂM SOÁT: Doanh nghiệp có thể sử dụng Private Cloud cho các công việc đặc thù, có tính nhạy cảm cao hoặc các công việc yêu cầu độ trễ thấp.',
      'TÍNH LINH HOẠT CAO: Doanh nghiệp có thể tận dụng nguồn tài nguyên khác từ Public Cloud khi cần thiết.',
      'TỐI ƯU CHI PHÍ: Cùng với khả năng mở rộng không giới hạn từ hạ tầng Public Cloud, doanh nghiệp chỉ cần chi trả cho năng lực điện toán bổ sung khi cần sử dụng',
      'DỄ DÀNG CHUYỂN ĐỔI: Doanh nghiệp có thể chuyển đổi công việc theo từng phần nhỏ lên môi trường đám mây, việc chuyển đổi không tốn quá nhiều công sức. Qua đó, khối lượng công việc sẽ giảm dần theo thời gian.'
    ],
    benefits: [
      'ĐA DẠNG MỤC ĐÍCH SỬ DỤNG: Công nghệ đám mây lai cho phép doanh nghiệp kết hợp mô hình đám mây riêng Private Cloud để lưu trữ các dữ liệu có tính bảo mật cao, và đám mây công cộng Public Cloud để lưu trữ các tài nguyên ít quan trọng và mang tính thử nghiệm.',
      'TÍNH LINH HOẠT CAO: Đáp ứng một cách linh hoạt trong việc triển khai công việc có tính thay đổi hoặc đột biến cao.'
    ]
  },
  {
    id: 26,
    title: 'HỆ THỐNG LƯU TRỮ TRỰC TUYẾN (CLOUD STORAGE)',
    category: 'infrastructure',
    image: '/images/solutions/cloudStorage.jpg',
    description: 'Cloud storage là hệ thống lưu trữ hướng đối tượng với giao diện dịch vụ web đơn giản, lưu trữ và truy xuất dữ liệu từ bất cứ đâu trên nền Internet.',
    features: [
      // 'Đa nền tảng',
      // 'Tự động hóa',
      // 'Bảo mật đa lớp'
    ],
    advantage: [
      'KẾT NỐI ĐƠN GIẢN: Truy cập hệ thống qua S3, HTTP/HTTPS/API kết nối cho phép người dùng phát triển ứng dụng một cách đơn giản, nhanh chóng.',
      'DUNG LƯỢNG KHÔNG GIỚI HẠN: Mở rộng lưu trữ lên tới Pentabyte khi có nhu cầu. Không gián đoạn dịch vụ, không thay đổi cấu hình khi mở rộng. Lưu trữ càng lớn, giá thuê càng rẻ.',
      'TỐC ĐỘ TỐI ĐA: Không giới hạn tốc độ đường truyền, rút ngắn thời gian tải dữ liệu. Tận dụng tối đa băng thông đầu cuối của khách hàng, không lo vấn đề cáp quang biển.',
      'TIẾT KIỆM CHI PHÍ: Tiết kiệm chi phí đầu tư, nâng cấp hệ thống, chi phí vận hành bảo dưỡng thiết bị, không lãng phí tài nguyên, không chi phí hỗ trợ sau bán hàng.'
    ]
  },
  {
    id: 27,
    title: 'DỊCH VỤ MÁY CHỦ ẢO (CLOUD SERVER)',
    category: 'infrastructure',
    image: '/images/solutions/cloudServer.jpg',
    description: 'Cung cấp máy chủ trên nền điện toán đám mây. Mỗi máy chủ ảo là 1 hệ thống riêng biệt, hoạt động hoàn toàn độc lập như một máy chủ vật lý. Người dùng có toàn quyền điều chỉnh hệ thống như: cài đặt phần mềm, lựa chọn hệ điều hành cũng như sử dụng các chức năng bên trong của hệ thống.',
    features: [
      'CẤU HÌNH MẠNH MẼ',
      'TRIỂN KHAI SIÊU TỐC',
      'BẢO MẬT TỐI ƯU',
      'MỞ RỘNG LINH HOẠT',
      'QUẢN LÝ DỄ DÀNG',
      'AN TOÀN DỮ LIỆU'
    ],
    advantage: [],
    benefits: [
      'ĐỘC LẬP VÀ LINH HOẠT',
      'SAO LƯU, BACKUP LIÊN TỤC',
      'KHẢ NĂNG MỞ RỘNG NHANH CHÓNG',
      'TỐI ƯU CHI PHÍ',
      'QUẢN TRỊ ĐƠN GIẢN',
      'BẢO MẬT, AN TOÀN'
    ]
  },
  {
    id: 28,
    title: 'ĐÁM MÂY CÔNG CỘNG PUBLIC CLOUD',
    category: 'infrastructure',
    image: '/images/solutions/cloudPublic.jpg',
    description: 'Dịch vụ Đám mây công cộng - Public Cloud của Viettel sử dụng công nghệ điện toán đám mây để tạo ra các tài nguyên CNTT như máy ảo, ứng dụng, bộ lưu trữ - luôn sẵn sàng cho người dùng thông qua kết nối internet. Public Cloud là một giải pháp tiên tiến thay thế cho kiến trúc hạ tầng CNTT truyền thống. ',
    features: [
      // 'Đa nền tảng',
      // 'Tự động hóa',
      // 'Bảo mật đa lớp'
    ],
    advantage: [
      'TRIỂN KHAI NHANH CHÓNG: Public Cloud cho phép triển khai môi trường dịch vụ hạ tầng nhanh chóng chỉ sau vài thao tác đơn giản. Việc xây dựng hạ tầng trước đây có thể mất tới vài tuần, giờ đây có thể xử lý chỉ trong vài phút.',
      'TRUY XUẤT TỪ MỌI NƠI: Lưu trữ dữ liệu trên Public Cloud cho phép người dùng truy xuất từ bất cứ đâu và vào bất kỳ thời điểm nào qua Internet.',
      'KHẢ NĂNG SAO LƯU VÀ KHÔI PHỤC DỮ LIỆU: Với Public Cloud, việc sao lưu và khôi phục dữ liệu trở nên nhanh chóng hơn rất nhiều so với hạ tầng vật lý nhờ vào đặc tính của điện toán đám mây và hệ thống hạ tầng rất lớn từ Viettel.',
      'GIẢM RỦI RO, LỖI HẠ TẦNG: Nhà cung cấp chịu trách nhiệm quản lý, cập nhật, bảo trì hạ tầng phần cứng và cam kết tính liên tục với các dịch vụ.',
      'CO GIÃN TÀI NGUYÊN THEO NHU CẦU: Public Cloud có khả năng tự động mở rộng hoặc thu gọn tài nguyên vô cùng linh hoạt theo đúng nhu cầu người sử dụng.'
    ],
    benefits: [
      'GIẢM CHI PHÍ ĐẦU TƯ VÀ TỐI ƯU CHI PHÍ DUY TRÌ: Loại bỏ chi phí đầu tư và mang đến khả năng triển khai tài nguyên nhanh chóng, doanh nghiệp chỉ phải trả phí duy trì cho những dịch vụ đã sử dụng. Nhân sự quản lý, quản trị duy trì hạ tầng của doanh nghiệp được giữ ở mức tối thiểu.',
      'ĐẢM BẢO KẾT NỐI VÀ KHAI THÁC CÁC NGUỒN LỰC: Kết nối, chia sẻ dữ liệu và làm việc cộng tác mọi lúc mọi nơi thông qua Internet.',
      'ĐẢM BẢO CHẤT LƯỢNG DỊCH VỤ CAM KẾT THEO SLA UPTIME 99,99%: Sản phẩm tuân thủ theo các tiêu chuẩn an ninh, an toàn quốc tế cùng với kênh hỗ trợ: 24/7/365.',
      'SẴN SÀNG THÍCH ỨNG: Public Cloud có tính linh hoạt cao, với cơ chế mở rộng và tùy biến theo nhu cầu thực tế sử dụng, có cơ chế “ON/OFF” dịch vụ nhằm đảm bảo khả năng thích nghi cao nhất & tiết giảm chi phí.',
      'CẠNH TRANH TRONG KINH DOANH: Doanh nghiệp tiết kiệm được chi phí, thời gian quản lý hạ tầng Công nghệ thông tin.'
    ]
  },
  {
    id: 28,
    title: 'ĐÁM MÂY RIÊNG PRIVATE CLOUD',
    category: 'infrastructure',
    image: '/images/solutions/cloudPrivate.jpg',
    description: 'Dịch vụ Đám mây riêng - Private Cloud của Viettel được phát triển trên nền tảng mã nguồn mở OpenStack và VMware. Private Cloud cung cấp hệ thống máy chủ ảo dành riêng cho từng tổ chức, doanh nghiệp. Điều này giúp đảm bảo an toàn bảo mật, độc lập về tài nguyên và tối ưu trong việc quản trị hệ thống. Private Cloud có thể triển khai tại hạ tầng CNTT của khách hàng hoặc tại trung tâm dữ liệu của Viettel.',
    features: [
      // 'Đa nền tảng',
      // 'Tự động hóa',
      // 'Bảo mật đa lớp'
    ],
    advantage: [
      'KHỞI TẠO NHANH, NÂNG CẤP DỄ DÀNG: Việc khởi tạo máy chủ ảo, chia nhỏ tài nguyên và cấp phát tự động đến người dùng theo nhu cầu thực tế giúp doanh nghiệp tiết kiệm thời gian vận hành. Điều này giúp giảm thiểu tài nguyên dư thừa và tối ưu hệ thống. Ngoài ra, việc triển khai tự động bằng các công cụ giúp đẩy nhanh quá trình nâng cấp và mở rộng hệ thống dịch vụ hạ tầng nhanh chóng chỉ sau vài thao tác đơn giản. Việc xây dựng hạ tầng trước đây có thể mất tới vài tuần, giờ đây có thể xử lý chỉ trong vài phút.',
      'KHẢ NĂNG MỞ RỘNG LINH HOẠT: Tính năng mở rộng (scale-out) hay thu nhỏ (scale-in) tài nguyên ngay lập tức theo nhu cầu của ứng dụng đáp ứng nhanh dịch vụ, tiết kiệm cho doanh nghiệp nhiều chi phí, thời gian và nhân lực.',
      'TÍNH SẴN SÀNG CAO: Hệ thống luôn hoạt động ổn định và có khả năng khôi phục cao nhờ được thiết lập sẵn phương án dự phòng, và tự động thay thế khi bị hỏng, đảm bảo an toàn và có tính sẵn sàng 24/7.'
    ],
    benefits: [
      'VẬN HÀNH HỆ THỐNG ĐƠN GIẢN: Việc vận hành hệ thống trở nên đơn giản với các công cụ quản lý tự động, tích hợp nhiều tính năng giúp admin tự thao tác.',
      'TÍNH SẴN SÀNG CAO: Giải pháp giúp tăng độ khả dụng và khôi phục của hệ thống, đảm bảo việc kinh doanh liên tục, không bị gián đoạn bởi các sự cố hạ tầng. Ngoài ra, hệ thống hạ tầng phần cứng riêng biệt với quy mô lớn của Viettel luôn sẵn sàng cho mọi nhu cầu mở rộng của doanh nghiệp.',
      'QUYỀN QUẢN TRỊ TỐI ĐA: Private Cloud chỉ có thể được truy cập bởi doanh nghiệp sử dụng. Doanh nghiệp sẽ có khả năng cấu hình và quản lý, phân bổ tài nguyên máy chủ một cách phù hợp tùy theo nhu cầu.'
    ]
  },
  {
    id: 29,
    title: 'DỊCH VỤ MÁY TÍNH ẢO (CLOUD PC)',
    category: 'infrastructure',
    image: '/images/solutions/cloudPc.jpg',
    description: 'Dịch vụ máy tính ảo (CLoud PC) là giải pháp ảo hóa cả phần cứng và ứng dụng, do Viettel IDC nghiên cứu và phát triển. Cloud PC cung cấp môi trường làm việc linh hoạt, xử lý dữ liệu và ứng dụng trên nền điện toán đám mây, thế thế hoàn toàn việc xử lý trên PC truyền thống.',
    features: [
      'AN TOÀN VÀ BẢO MẬT THÔNG TIN: Lưu trữ tập trung, giảm rủi ro thất thoát dữ liệu. Tích hợp hệ thống bảo mật, Antivirus.',
      'CUNG CẤP NHANH, MỞ RỘNG LINH HOẠT: Cung cấp dịch vụ nhanh theo khuôn mẫu, nâng cấp linh hoạt theo nhu cầu',
      'QUẢN LÝ TẬP TRUNG: Quản lý, giám sát tập trung, tối giản chi phí vận hành khai thác',
      'TỐI ƯU CHI PHÍ: Giảm chi phí đầu tư PC, chi phí vận hành. Giảm nhân sự vận hành và điện năng tiêu thụ',
      'ĐA NỀN TẢNG: Sử dụng mọi lúc mọi nơi, mọi thiết bị: Hỗ trợ truy cập đa nền tảng: Client, laptop, smartphone, tablet,..'
    ],
    advantage: [

    ],
    benefits: [

    ]
  },
  {
    id: 30,
    title: 'DỊCH VỤ CHO THUÊ MÁY CHỦ (DEDICATED SERVER)',
    category: 'infrastructure',
    image: '/images/solutions/serverDedicated.jpg',
    description: 'Dịch vụ cho thuê máy chủ (Dedicated server) là dịch vụ cho thuê thiết bị, bao gồm: Phần cứng máy chủ, thiết bị mạng, tường lửa, firewall, thiết bị an ninh mạng, thiết bị lưu trữ,… Khách hàng được tư vấn chọn máy chủ phù hợp, có toàn quyền sử dụng và quản lý thiết bị thuê bằng công cụ quản trị thông minh.',
    features: [
      // 'Đa nền tảng',
      // 'Tự động hóa',
      // 'Bảo mật đa lớp'
    ],
    advantage: [

    ],
    benefits: [
      'TIẾT KIỆM CHI PHÍ: Thuê chỗ đặt giúp doanh nghiệp tiết kiệm chi phí đầu tư thiết bị, hạ tầng ban đầu, chi phí điện năng tiêu thụ, chi phí bản dưỡng, bảo trì, vận hành,..',
      'TÙY CHỌN CẤU HÌNH: Tùy chọn cấu hình từ các nhà cung cấp uy tín trên thế giới: HP, DELL, IBM,…',
      'ĐỘC LẬP VÀ BẢO MẬT: Thuê máy chủ giúp bạn toàn quyền sử dụng và quản lý máy chủ của mình',
      'QUẢN TRỊ THÔNG MINH: Quản trị thiết bị từ xa bằng công cụ chuyên dụng',
      'TÍNH LINH HOẠT CAO: Khả năng mở rộng tài nguyên, nâng cấp không gian, nhu cầu về thiết bị bất cứ khi nào có nhu cầu.'
    ]
  },
  {
    id: 31,
    title: 'SAO LƯU DỰ PHÒNG DỮ LIỆU (BACKUP AS A SERVICE)',
    category: 'infrastructure',
    image: '/images/solutions/backup.png',
    description: 'Sao lưu dự phòng dữ liệu (Backup as a Service) là dịch vụ sao lưu dữ liệu theo yêu cầu của khách hàng, lưu trữ trên hạ tầng điện toán đám mây.',
    features: [
      'SAO LƯU MỌI LOẠI DỮ LIỆU: Sao lưu tất cả các loại dữ liệu: Tập tin, cơ sở dữ liệu, hệ điều hành, máy ảo, máy vật lý lên hạ tầng lưu trữ điện toán đám mây Viettel.',
      'TỰ ĐỘNG LẬP LỊCH: Tự động sao lưu theo giờ, ngày, tuần, tháng, năm. Lập lịch xoay vòng, thiết lập sao lưu vào giờ cố định đã lập...',
      'TỰ ĐỘNG THÔNG BÁO: Hệ thống tự động gửi email thông báo tới quản trị viên khi quá trình sao lưu dữ liệu thực hiện thành công, thất bại.',
      'DỰ PHÒNG THẢM HỌA: Dữ liệu được sao lưu lên hệ thống Cloud của Viettel IDC, đảm bảo an toàn ngay cả khi hệ thống chính gặp thảm họa.',
      'LƯU TRỮ PHIÊN BẢN: Hệ thống lưu trữ nhiều phiên bản (điểm phục hồi) của dữ liệu, đảm bảo an toàn ngay cả khi dữ liệu bị hỏng do virus.',
      'MÃ HÓA DỮ LIỆU: Dữ liệu được mã hóa đầu cuối bằng chuẩn mã hóa mới nhất (AES 256) cùng với mã hóa đường truyền SSL, đảm bảo an toàn bảo mật thông tin.'
    ],
    advantage: [

    ],
    benefits: [

    ]
  },
  {
    id: 32,
    title: 'MẠNG PHÂN PHỐI NỘI DUNG (CDN)',
    category: 'infrastructure',
    image: '/images/solutions/cdn.png',
    description: 'Mạng phân phối nội dung CDN (Content Delivery Network) là hệ thống nhiều máy chủ đặt phân tán ở nhiều vị trí địa lý khác nhau, có nhiệm vụ sao chép và lưu trữ các nội dung bên trong website để người dùng khi truy cập vào website sẽ tải được nội dung từ các máy chủ CDN gần với mình nhất.',
    features: [
      'LIVE STREAMING: Tính năng Live Streaming giúp truyền tải trực tiếp kênh, sự kiện tới số lượng lớn người dùng.',
      'VOD STREAMING: Tính năng VOD Streaming giúp truyền tải video tới các thiết bị đầu cuối của người dùng.',
      'WEB CACHING: Tăng tốc cho website thông qua việc lưu trữ tạm (caching) dữ liệu web trên hệ thống CDN.',
      'HTTP DOWNLOAD: Tăng tốc độ tải file thông qua việc lưu trữ tạm (caching) các file nội dung trên hệ thống CDN'
    ],
    advantage: [
      'TĂNG ĐỘ SẴN SÀNG: Nội dung website được lưu nhiều bản sao trên nhiều máy chủ, đảm bảo phục vụ người dùng ngay cả khi có một vài máy chủ gặp sự cố',
      'TĂNG TỐC ĐỘ ĐÁP ỨNG: Nhiều máy chủ CDN cùng phục vụ khách hàng sẽ làm giảm tối đa số request đợi, phục vụ khách hàng nhanh nhất',
      'GIẢM THỜI GIAN TRỄ: Người dùng truy cập website sẽ được phục vụ bởi máy chủ chứa nội dung ở gần mình nhất, giúp giảm tối đa thời gian chờ tải.',
      'TIẾT KIỆM CHI PHÍ: Tiết kiệm chi phí đầu tư ban đầu cho hệ thống máy chủ và công nghệ streaming. Tối ưu chi phí vận hành hệ thống'
    ],
    benefits: [

    ]
  },
  {
    id: 33,
    title: 'DỊCH VỤ TÊN MIỀN (DOMAIN)',
    category: 'infrastructure',
    image: '/images/solutions/domain.png',
    description: 'Dịch vụ tên miền (Domain) là định danh của website trên internet. Tên miền thường gắn liền với trên công ty và thương hiệu của doanh nghiệp. Tên miền là duy nhất và được ưu tiên cấp phát cho chủ thể thực hiện đăng ký trước.',
    features: [
      'KHỞI TẠO NHANH CHÓNG: Tên miền chuyên nghiệp với đa dạng các đuôi tên miền khác nhau, tùy theo mục đích sử dụng và nhu cầu của khách hàng',
      'QUẢN TRỊ THÔNG MINH: Không bị giới hạn về mặt địa lý hay thời gian, có thể truy cập mọi lúc mọi nơi.',
      'ĐẢM BẢO TÍNH SỞ HỮU: Đảm bảo tên miền là độc nhất, chính thức và sở hữu riêng của người đăng ký'
    ],
    advantage: [

    ],
    benefits: [
      'SỞ HỮU RIÊNG: Sở hữu riêng cho doanh nghiệp, cá nhân một định danh chính thức và độc nhất cho website của mình',
      'KHẲNG ĐỊNH THƯƠNG HIỆU VÀ NHÃN HIỆU: Khẳng định thương hiệu và nhãn hiệu hàng hóa thông qua website có tên miền chính thức và được bảo vệ',
      'MỞ RỘNG PHẠM VI KHÁCH HÀNG: Mở rộng phạm vi khách hàng trên mọi khu vực, lứa tuổi',
      'NÂNG CAO UY TÍN: Nâng cao uy tín, gia tăng độ phủ thương hiệu',
      'THU HÚT KHÁCH HÀNG: Thu hút khách hàng trên phạm vi không giới hạn'
    ]
  },
  {
    id: 34,
    title: 'DỊCH VỤ CHO THUÊ CHỖ ĐẶT THIẾT BỊ (COLOCATION)',
    category: 'infrastructure',
    image: '/images/solutions/colocation.jpg',
    description: 'Dịch vụ cho thuê chỗ đặt thiết bị (Colocation) là dịch vụ cung cấp không gian hạ tầng chỗ đặt, hệ thống điện, điều hòa và thiết bị liên quan khác, để triển khai hệ thống công nghệ thông tin, cho phép khách hàng toàn quyền sử dụng và kiểm soát hệ thống mà không phải đầu tư, lắp đặt, bảo trì.',
    features: [
      'GIÁM SÁT TỪ XA: Camera IP giám sát từ xa',
      'ĐIỀU KHIỂN MÁY CHỦ: Điều khiển máy chủ từ xa qua IP KVM',
      'GIÁM SÁT LƯU LƯỢNG, BĂNG THÔNG: Giám sát lưu lượng, băng thông qua MRTG',
      'CẢNH BÁO: Cảnh báo hệ thống qua SMS',
      'HỖ TRỢ TỪ XA: Hỗ trợ từ xa qua cổng thông tin 24/7',
      'BẢO MẬT: Bảo mật thẻ từ và vân tay',
      'HỆ THỐNG HỖ TRỢ: Hệ thống điều hòa, UPS, máy phát điện dự phòng và chống sét, chống cháy'
    ],
    advantage: [
      'HẠ TẦNG LÝ TƯỞNG: Trung tâm dữ liệu đáp ứng tiêu chuẩn Rated 3 - TIA942, hạ tầng phụ trợ tối ưu...cung cấp điều kiện lý tưởng cho thiết bị',
      'KẾT NỐI ỔN ĐỊNH: Cung cấp đường truyền Internet nhanh, ổn định và liên tục, băng thông lớn, đảm bảo hoạt động thông suốt',
      'MỞ RỘNG LINH HOẠT: Mở rộng tài nguyên, nâng cấp không gian đặt khi có nhu cầu. Hạ tầng của Viettel IDC luôn sẵn sàng cho điều đó',
      'BẢO MẬT ĐA TẦNG: Máy chủ của bạn được kiểm soát bởi hệ thống camera giám sát, bảo mật bằng vân tay, theo dõi từ xa qua IP Camera',
      'TỐI ƯU CHI PHÍ: Thay vì bỏ chi phí khủng đầu tư hạ tầng TTDL và mắc kẹt với nó, bạn có thể thuê và trải nghiệm. Đơn giản và tiết kiệm hơn nhiều.',
      'HỖ TRỢ MIỄN PHÍ: Đội ngũ nhân sự IT chuyên môn cao luôn sẵn sàng 24/7 theo dõi, giải đáp và giúp bạn giải quyết mọi vấn đề.'
    ],
    benefits: [
      'TIẾT KIỆM CHI PHÍ: Giảm chi phí cho doanh nghiệp.',
      'TUỔI THỌ: Gia tăng tuổi thọ thiết bị.',
      'SỰ CỐ: Giảm tối đa sự cố.',
      'QUẢN TRỊ THÔNG MINH: Đây là giải pháp quản lý thông tin cho doanh nghiệp.',
      'BẢO MẬT HỆ THỐNG: Bảo mật với hệ thống Firewall, Anti Virus, Anti Spam chuyên nghiệp.',
      'TÍNH ỔN ĐỊNH CAO: Hỗ trợ 24/07/365.'
    ]
  },
];

export const categories = [
  {
    value: 'all',
    label: 'Tất cả giải pháp',
    icon: <AppstoreOutlined />,
    description: 'Xem tất cả các giải pháp và dịch vụ'
  },
  {
    value: 'telecom',
    label: 'Viễn thông',
    icon: <PhoneOutlined />,
    description: 'Các giải pháp và dịch vụ viễn thông'
  },
  {
    value: 'it',
    label: 'Công nghệ thông tin',
    icon: <ToolOutlined />,
    description: 'Các giải pháp công nghệ thông tin'
  },
  {
    value: 'infrastructure',
    label: 'Hạ tầng số',
    icon: <DesktopOutlined />,
    description: 'Các giải pháp hạ tầng số'
  }
];
