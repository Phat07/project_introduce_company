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
      'Tích hợp nhiều đầu số 1900,1800, cố định, di động'
    ]
  },
  {
    id: 2,
    title: 'Kênh thuê riêng',
    category: 'telecom',
    image: '/images/solutions/leased-line.jpg',
    description: 'Dịch vụ Kênh thuê riêng là dịch vụ cung cấp đường kết nối vật lý dành riêng cho khách hàng sử dụng cáp quang để truyền thông tin giữa các điểm cố định trong nước theo phương thức kết nối điểm – điểm. Khách hàng sẽ không bị chia sẻ băng thông tại mọi thởi điểm.',
    features: [
      'Kết nối điểm - điểm hoặc điểm - đa điểm',
      'Triển khai trên hạ tầng SDH',
      'Độ ổn định và bảo mật cao'
    ]
  },
  {
    id: 3,
    title: 'GIẢI PHÁP MẠNG RIÊNG ẢO TỐC ĐỘ CAO (METRO WAN)',
    category: 'telecom',
    image: '/images/solutions/metro-wan.jpg',
    description: 'MetroWan là dịch vụ cung cấp mạng riêng ảo (VPN: Virtual private network Layer 2) với mục đích truyền dữ liệu dành cho doanh nghiệp có nhiều chi nhánh, trụ sở trên toàn quốc dựa trên hạ tầng MPLS/VPN (Multi-Protocol Label Switching/Virtual Private Network) của Viettel, nhằm đáp ứng các nhu cầu truyền dữ liệu (data, voice, video …vv) tốc độ cao và bảo mật giữa hai hay nhiều điểm chi nhánh của khách hàng.',
    features: [
      'Dựa trên hạ tầng MPLS/VPN',
      'Kết nối đa điểm linh hoạt',
      'Bảo mật cao với đường hầm riêng'
    ]
  },
  {
    id: 4,
    title: 'GIẢI PHÁP MẠNG RIÊNG ẢO (OFFICE WAN)',
    category: 'telecom',
    image: '/images/solutions/office-wan.jpg',
    description: 'Office Wan là dịch vụ cung cấp mạng riêng ảo (VPN: Virtual private network Layer 3) với mục đích truyền dữ liệu dành cho doanh nghiệp có nhiều chi nhánh, trụ sở trên toàn quốc dựa trên hạ tầng MPLS/VPN (Multi-Protocol Label Switching/ Virtual Private Network) của Viettel.',
    features: [
      'Kết nối an toàn giữa các văn phòng',
      'Quản lý tập trung',
      'Tối ưu chi phí vận hành'
    ]
  },
  {
    id: 5,
    title: 'GIẢI PHÁP HỘI NGHỊ TRUYỀN HÌNH',
    category: 'telecom',
    image: '/images/solutions/video-conference.jpg',
    description: 'Hội nghị truyền hình (HNTH) là dịch vụ truyền tải âm thanh, hình ảnh, chia sẻ dữ liệu, nội dung giữa 2 hay nhiều địa điểm từ xa qua đường truyền mạng, giúp các điểm cùng đồng thởi liên lạc hai chiều như đang trong cùng một phòng họp. Dịch vụ HNTH thường được sử dụng để kết nối cho các cuộc họp, thảo luận, đào tạo trực tuyến,… giữa các điểm với nhau. ',
    features: [
      'Chất lượng HD/FullHD',
      'Âm thanh đa hướng',
      'Chia sẻ nội dung dễ dàng'
    ]
  },
  {
    id: 6,
    title: 'TIN NHẮN THƯƠNG HIỆU (SMS BRANDNAME)',
    category: 'telecom',
    image: '/images/solutions/sms-brandname.jpg',
    description: 'Sms Brandname là dịch vụ cho phép các Cơ quan/tổ chức/doanh nghiệp/Cá nhân gửi thông tin nội bộ, tin nhắn chăm sóc khách hàng hoặc quảng cáo bằng cách gửi tin nhắn trực tiếp tới các thuê bao di động của các doanh nghiệp viễn thông bằng hình thức hiển thị thương hiệu (tên định danh) từ người gửi thay cho tin nhắn bằng đầu số.',
    features: [
      'Hiển thị tên thương hiệu',
      'Gửi tin nhắn hàng loạt',
      'Tích hợp API linh hoạt'
    ]
  },
  {
    id: 7,
    title: 'DỊCH VỤ THOẠI TRÊN NỀN VOIP CHO DOANH NGHIỆP',
    category: 'telecom',
    image: '/images/solutions/voip.jpg',
    description: 'Dịch vụ trung kế SIP là dịch vụ kênh trung kế thoại sử dụng giao thức SIP 2.0 (Session Initiation Protocol). Dịch vụ trung kế SIP được chia làm 2 loại: Trung kế SIP đầu số cố định (1800, 1900, PSTN, IPPhone): sử dụng kênh truyền để kết nối đầu số 1800, 1900, PSTN, IPPhone với tổng đài IP PBX có hỗ trợ giao thức SIP của khách hàng. Trung kế SIP đầu số di động (09xxx/086xxx): sử dụng kênh truyền',
    features: [
      'Chi phí cuộc gọi thấp',
      'Tích hợp nhiều thiết bị',
      'Chất lượng cuộc gọi cao'
    ]
  },
  {
    id: 8,
    title: 'DỊCH VỤ TRUNG KẾ SỐ (E1)',
    category: 'telecom',
    image: '/images/solutions/e1.jpg',
    description: 'Dịch vụ Trung kế số (E1) là dịch vụ cung cấp đường truyền kết nối giữa tổng đài của các đơn vị cung cấp dịch vụ viễn thông đến tổng đài nội bộ của khách hàng. Mỗi đường trung kế cho phép thiết lập 30 cuộc gọi đồng thởi cùng lúc.',
    features: [
      'Băng thông 2Mbps',
      '30 kênh thoại đồng thởi',
      'Chất lượng cuộc gọi ổn định'
    ]
  },
  {
    id: 9,
    title: 'DỊCH VỤ DCOM',
    category: 'telecom',
    image: '/images/solutions/dcom.jpg',
    description: 'Dịch vụ Dcom: Là dịch vụ truy cập internet trên nền 4G/3G có tính cơ động với tốc độ cao.',
    features: [
      'Tốc độ cao',
      'Phủ sóng rộng',
      'Kết nối linh hoạt'
    ]
  },
  {
    id: 10,
    title: 'DỊCH VỤ ĐẦU SỐ 1900',
    category: 'telecom',
    image: '/images/solutions/1900.jpg',
    description: 'Dịch vụ đầu số 1900 của Viettel là dịch vụ tổng đài chăm sóc khách hàng cho doanh nghiệp, cho phép tiếp nhận 1 hoặc nhiều cuộc gọi đến đồng thởi thông qua một số điện thoại duy nhất trên toàn quốc mang đầu số 1900.',
    features: [
      'Số điện thoại dễ nhớ',
      'Tiếp nhận nhiều cuộc gọi',
      'Tính phí người gọi'
    ]
  },
  {
    id: 11,
    title: 'LEASEDLINE INTERNET',
    category: 'telecom',
    image: '/images/solutions/leased-internet.jpg',
    description: 'Leasedline Internet là dịch vụ cung cấp kết nối Internet trực tiếp có cổng kết nối quốc tế riêng biệt, được triển khai trên hạ tầng cáp quang, có khả năng đáp ứng mọi nhu cầu về tốc độ của khách hàng.',
    features: [
      'Băng thông cam kết',
      'Hỗ trợ 24/7',
      'IP tĩnh miễn phí'
    ]
  },
  {
    id: 12,
    title: 'DỊCH VỤ INTERNET CÁP QUANG (FTTH)',
    category: 'telecom',
    image: '/images/solutions/ftth.jpg',
    description: 'Dịch vụ Internet Cáp quang FTTH (Fiber-To-The-Home) là dịch vụ hiện đại nhất giúp truy cập Internet tốc độ cao dựa trên nền tảng công nghệ cáp quang.',
    features: [
      'Tốc độ download/upload cân bằng',
      'Độ ổn định cao',
      'Dễ dàng nâng cấp băng thông'
    ]
  },
  {
    id: 13,
    title: 'DỊCH VỤ MIỄN CƯỚC NGƯỜI GỌI 1800',
    category: 'telecom',
    image: '/images/solutions/1800.jpg',
    description: 'Dịch vụ miễn cước người gọi – 1800 là giải pháp tư vấn các sản phẩm, dịch vụ cho khách hàng hiệu quả nhất. Khách hàng của các doanh nghiệp được MIỄN PHÍ các cuộc gọi tới đầu số 1800xxxx của doanh nghiệp đó.',
    features: [
      'Miễn phí cho người gọi',
      'Xây dựng thương hiệu',
      'Tiếp nhận đa cuộc gọi'
    ]
  },
  {
    id: 14,
    title: 'GIẢI PHÁP THIẾT LẬP MẠNG ẢO (SD-WAN)',
    category: 'telecom',
    image: '/images/solutions/sd-wan.jpg',
    description: 'SD-WAN là giải pháp thiết lập mạng Wan (ảo) trên hệ thống mạng vật lý truyền thống như FTTx, LTE/5G hay MPLS dựa trên phần mềm với độ linh hoạt cao, triển khai nhanh và vận hành thuận tiên hơn so với giải pháp truyền thống.',
    features: [
      'Quản lý tập trung',
      'Tối ưu băng thông',
      'Bảo mật cao'
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
    image: '/images/solutions/erp.jpg',
    description: 'Dịch vụ Viettel RPA (Robotic Process Automation) là dịch vụ cung cấp giải pháp tự động hóa quy trình dựa trên robot phần mềm, cung cấp cho doanh nghiệp nguồn lực lao động mới (Digital workforce) giúp cải thiện năng suất và tăng trải nghiệm khách hàng. Robot được thiết kế để xử lý các công việc có khối lượng lớn, lặp đi lặp lại trong doanh nghiệp, ứng dụng với hàng ngàn quy trình thuộc tất cả các nhóm chức năng như CSKH, kế toán, mua sắm, nhân sự, quản lý chuỗi cung ứng…. ',
    features: [
      'Quản lý tài chính',
      'Quản lý nhân sự',
      'Quản lý kho vận'
    ]
  },
  {
    id: 17,
    title: 'Quản Trị Vận Hành',
    category: 'it',
    image: '/images/solutions/iot.jpg',
    description: 'Dịch vụ quản trị (Managed Service) là dịch vụ quản trị, điều hành hệ thống máy chủ doanh nghiệp đồng thởi hỗ trợ người sử dụng trong việc sử dụng máy tính hàng ngày',
    features: [
      'Thu thập dữ liệu realtime',
      'Phân tích dữ liệu',
      'Dashboard trực quan'
    ]
  },
  {
    id: 18,
    title: 'DMS.LITE – Giải pháp bán hàng chuyên nghiệp',
    category: 'it',
    image: '/images/solutions/datacenter.jpg',
    description: 'Là giải pháp quản lý hệ thống bán hàng trực tuyến cho các doanh nghiệp từ trụ sở công ty đến các giám sát, các nhân viên bán hàng trên thị trường',
    features: [
      'Bảo mật cao cấp',
      'Hiệu suất tối ưu',
      'Khả năng mở rộng'
    ]
  },
  {
    id: 19,
    title: 'QUẢN LÝ HỆ THỐNG PHÂN PHỐI (DMS.ONE)',
    category: 'it',
    image: '/images/solutions/cloud.jpg',
    description: 'DMS.ONE là giải pháp phần mềm quản lý hệ thống phân phối hàng hóa trực tuyến có thể áp dụng cho: Nhà sản xuất - Nhà phân phối - Đại lý - Điểm bán lẻ. Thông qua hệ thống DMS.ONE, nhà phân phối cung cấp thông tin khách hàng, sản phẩm, khuyến mãi, thực hiện xuất nhập kho cho từng nhân viên bán hàng cung cấp hàng hóa đến các nhà bán lẻ như siêu thị, cửa hàng tiện lợi, đại lý, tạp hóa…để đến tay người tiêu dùng dưới sự quản lý của giám sát bán hàng. Các đơn hàng, hình ảnh và vấn đề phát sinh của khách hàng luôn được cập nhật theo thời gian thực. Mô hình phân phối này sẽ giúp hoạt động bán hàng nhanh chóng, chính xác, hiệu quả và dễ quản lý hơn.',
    features: [
      'Đa nền tảng',
      'Tự động hóa',
      'Bảo mật đa lớp'
    ]
  },
  {
    id: 20,
    title: 'HỆ THỐNG VĂN PHÒNG ĐIỆN TỬ (MOFFICE)',
    category: 'it',
    image: '/images/solutions/cloud.jpg',
    description: 'Hệ thống văn phòng điện tử Viettel Office là hệ thống Văn phòng thông minh dành cho Doanh nghiệp sử dụng trên đa nền tảng với mục tiêu quản lý các hoạt động hành chính chuyên nghiệp, hiện đại mà vẫn đảm bảo tính linh hoạt, đơn giản. Là tập đoàn đi đầu về chuyển đổi số, Viettel có nhiều kinh nghiệm triển khai hệ thống Văn phòng điện tử cho các Tập đoàn, ngân hàng, doanh nghiệp lớn trong và ngoài nước, có nhiều kinh nghiệm xử lý những vướng mắc doanh nghiệp gặp phải khi triển khai hệ thống.',
    features: [
      'Đa nền tảng',
      'Tự động hóa',
      'Bảo mật đa lớp'
    ]
  },
  {
    id: 21,
    title: 'GIẢI PHÁP CHỨNG THỰC CHỮ KÝ SỐ (CA)',
    category: 'it',
    image: '/images/solutions/cloud.jpg',
    description: 'Chứng thực chữ ký số là dịch vụ được sử dụng trong các giao dịch điện tử nhằm xác định danh tính của người ký, đảm bảo tính toàn vẹn và giá trị pháp lý giúp cho việc thực hiện các giao dịch điện tử từ xa qua Internet trở nên dễ dàng, đơn giản và bảo mật.',
    features: [
      'Đa nền tảng',
      'Tự động hóa',
      'Bảo mật đa lớp'
    ]
  },
  {
    id: 22,
    title: 'DỊCH VỤ QUẢN LÝ DANH TIẾNG REPUTA',
    category: 'it',
    image: '/images/solutions/cloud.jpg',
    description: 'Reputa là Hệ thống Giám sát và Phân tích thông tin trên môi trường mạng (báo điện tử, diễn đàn, blog, mạng xã hội: Facebook, Instagram, các kênh video Youtube... v.v…) ứng dụng các công nghệ trí tuệ nhân tạo tiên tiến nhất nhằm nắm bắt đến từng cá thể người dùng Internet.',
    features: [
      'Đa nền tảng',
      'Tự động hóa',
      'Bảo mật đa lớp'
    ]
  },
  {
    id: 23,
    title: 'CLOUD WIFI MARKETING (VWIFI)',
    category: 'it',
    image: '/images/solutions/cloud.jpg',
    description: 'vWifi là dịch vụ Wifi Marketing được triển khai trên nền Cloud, giúp cho doanh nghiệp có thể truyền tải các nội dung quảng cáo, các tương tác tới trực tiếp người dùng thông qua hạ tầng Wifi. Phù hợp với đối tượng khách hàng là các doanh nghiệp kinh doanh dịch vụ khách sạn, lữ hành và dịch vụ du lịch- nơi có nhu cầu cao về tương tác để quảng cáo tới khách hàng sử dụng dịch vụ.',
    features: [
      'Đa nền tảng',
      'Tự động hóa',
      'Bảo mật đa lớp'
    ]
  },
  {
    id: 24,
    title: 'GIẢI PHÁP WIFI CHO DOANH NGHIỆP',
    category: 'it',
    image: '/images/solutions/cloud.jpg',
    description: 'Thành Công Solutions cung cấp giải pháp wifi toàn diện, đảm bảo phủ sóng toàn bộ với độ bảo mật cao, tốc độ truy cập ổn định, và tích hợp nhiều tính năng theo yêu cầu.',
    features: [
      'Đa nền tảng',
      'Tự động hóa',
      'Bảo mật đa lớp'
    ]
  },
  // Hạ tầng số
  {
    id: 25,
    title: 'ĐÁM MÂY LAI HYBRID CLOUD',
    category: 'infrastructure',
    image: '/images/solutions/datacenter.jpg',
    description: 'Hybrid Cloud là mô hình điện toán đám mây kết hợp giữa đám mây riêng Private Cloud và đám mây công cộng Public Cloud. Hybrid Cloud đáp ứng được các nhu cầu về chuyển đổi dữ liệu qua lại giữa Private Cloud và Public Cloud khi có những yêu cầu thay đổi về chi phí, điện toán, bảo mật. Ngoài ra, Hybrid Cloud đem lại sự linh hoạt và nhiều tuỳ chọn trong việc triển khai dữ liệu hơn so với mô hình Private hay Public Cloud thông thường.',
    features: [
      'Bảo mật cao cấp',
      'Hiệu suất tối ưu',
      'Khả năng mở rộng'
    ]
  },
  {
    id: 26,
    title: 'HỆ THỐNG LƯU TRỮ TRỰC TUYẾN (CLOUD STORAGE)',
    category: 'infrastructure',
    image: '/images/solutions/cloud.jpg',
    description: 'Cloud storage là hệ thống lưu trữ hướng đối tượng với giao diện dịch vụ web đơn giản, lưu trữ và truy xuất dữ liệu từ bất cứ đâu trên nền Internet.',
    features: [
      'Đa nền tảng',
      'Tự động hóa',
      'Bảo mật đa lớp'
    ]
  },
  {
    id: 27,
    title: 'DỊCH VỤ MÁY CHỦ ẢO (CLOUD SERVER)',
    category: 'infrastructure',
    image: '/images/solutions/cloud.jpg',
    description: 'Cung cấp máy chủ trên nền điện toán đám mây. Mỗi máy chủ ảo là 1 hệ thống riêng biệt, hoạt động hoàn toàn độc lập như một máy chủ vật lý. Người dùng có toàn quyền điều chỉnh hệ thống như: cài đặt phần mềm, lựa chọn hệ điều hành cũng như sử dụng các chức năng bên trong của hệ thống.',
    features: [
      'Đa nền tảng',
      'Tự động hóa',
      'Bảo mật đa lớp'
    ]
  },
  {
    id: 28,
    title: 'ĐÁM MÂY CÔNG CỘNG PUBLIC CLOUD',
    category: 'infrastructure',
    image: '/images/solutions/cloud.jpg',
    description: 'Dịch vụ Đám mây công cộng - Public Cloud của Viettel sử dụng công nghệ điện toán đám mây để tạo ra các tài nguyên CNTT như máy ảo, ứng dụng, bộ lưu trữ - luôn sẵn sàng cho người dùng thông qua kết nối internet. Public Cloud là một giải pháp tiên tiến thay thế cho kiến trúc hạ tầng CNTT truyền thống. ',
    features: [
      'Đa nền tảng',
      'Tự động hóa',
      'Bảo mật đa lớp'
    ]
  },
  {
    id: 28,
    title: 'ĐÁM MÂY RIÊNG PRIVATE CLOUD',
    category: 'infrastructure',
    image: '/images/solutions/cloud.jpg',
    description: 'Dịch vụ Đám mây riêng - Private Cloud của Viettel được phát triển trên nền tảng mã nguồn mở OpenStack và VMware. Private Cloud cung cấp hệ thống máy chủ ảo dành riêng cho từng tổ chức, doanh nghiệp. Điều này giúp đảm bảo an toàn bảo mật, độc lập về tài nguyên và tối ưu trong việc quản trị hệ thống. Private Cloud có thể triển khai tại hạ tầng CNTT của khách hàng hoặc tại trung tâm dữ liệu của Viettel.',
    features: [
      'Đa nền tảng',
      'Tự động hóa',
      'Bảo mật đa lớp'
    ]
  },
  {
    id: 29,
    title: 'DỊCH VỤ MÁY TÍNH ẢO (CLOUD PC)',
    category: 'infrastructure',
    image: '/images/solutions/cloud.jpg',
    description: 'Dịch vụ máy tính ảo (CLoud PC) là giải pháp ảo hóa cả phần cứng và ứng dụng, do Viettel IDC nghiên cứu và phát triển. Cloud PC cung cấp môi trường làm việc linh hoạt, xử lý dữ liệu và ứng dụng trên nền điện toán đám mây, thế thế hoàn toàn việc xử lý trên PC truyền thống.',
    features: [
      'Đa nền tảng',
      'Tự động hóa',
      'Bảo mật đa lớp'
    ]
  },
  {
    id: 30,
    title: 'DỊCH VỤ CHO THUÊ MÁY CHỦ (DEDICATED SERVER)',
    category: 'infrastructure',
    image: '/images/solutions/cloud.jpg',
    description: 'Dịch vụ cho thuê máy chủ (Dedicated server) là dịch vụ cho thuê thiết bị, bao gồm: Phần cứng máy chủ, thiết bị mạng, tường lửa, firewall, thiết bị an ninh mạng, thiết bị lưu trữ,… Khách hàng được tư vấn chọn máy chủ phù hợp, có toàn quyền sử dụng và quản lý thiết bị thuê bằng công cụ quản trị thông minh.',
    features: [
      'Đa nền tảng',
      'Tự động hóa',
      'Bảo mật đa lớp'
    ]
  },
  {
    id: 31,
    title: 'SAO LƯU DỰ PHÒNG DỮ LIỆU (BACKUP AS A SERVICE)',
    category: 'infrastructure',
    image: '/images/solutions/cloud.jpg',
    description: 'Sao lưu dự phòng dữ liệu (Backup as a Service) là dịch vụ sao lưu dữ liệu theo yêu cầu của khách hàng, lưu trữ trên hạ tầng điện toán đám mây.',
    features: [
      'Đa nền tảng',
      'Tự động hóa',
      'Bảo mật đa lớp'
    ]
  },
  {
    id: 32,
    title: 'MẠNG PHÂN PHỐI NỘI DUNG (CDN)',
    category: 'infrastructure',
    image: '/images/solutions/cloud.jpg',
    description: 'Mạng phân phối nội dung CDN (Content Delivery Network) là hệ thống nhiều máy chủ đặt phân tán ở nhiều vị trí địa lý khác nhau, có nhiệm vụ sao chép và lưu trữ các nội dung bên trong website để người dùng khi truy cập vào website sẽ tải được nội dung từ các máy chủ CDN gần với mình nhất.',
    features: [
      'Đa nền tảng',
      'Tự động hóa',
      'Bảo mật đa lớp'
    ]
  },
  {
    id: 33,
    title: 'DỊCH VỤ TÊN MIỀN (DOMAIN)',
    category: 'infrastructure',
    image: '/images/solutions/cloud.jpg',
    description: 'Dịch vụ tên miền (Domain) là định danh của website trên internet. Tên miền thường gắn liền với trên công ty và thương hiệu của doanh nghiệp. Tên miền là duy nhất và được ưu tiên cấp phát cho chủ thể thực hiện đăng ký trước.',
    features: [
      'Đa nền tảng',
      'Tự động hóa',
      'Bảo mật đa lớp'
    ]
  },
  {
    id: 34,
    title: 'DỊCH VỤ CHO THUÊ CHỖ ĐẶT THIẾT BỊ (COLOCATION)',
    category: 'infrastructure',
    image: '/images/solutions/cloud.jpg',
    description: 'Dịch vụ cho thuê chỗ đặt thiết bị (Colocation) là dịch vụ cung cấp không gian hạ tầng chỗ đặt, hệ thống điện, điều hòa và thiết bị liên quan khác, để triển khai hệ thống công nghệ thông tin, cho phép khách hàng toàn quyền sử dụng và kiểm soát hệ thống mà không phải đầu tư, lắp đặt, bảo trì.',
    features: [
      'Đa nền tảng',
      'Tự động hóa',
      'Bảo mật đa lớp'
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
