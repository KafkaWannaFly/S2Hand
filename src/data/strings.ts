export const searchbar = {
  placeholder: "Tìm kiếm sản phẩm"
};

export const navigations = {
  home: "Trang chủ",
  dashboard: "Quản lý tin",
  nofi: "Thông báo",
  cart: "Giỏ hàng",
  post: "Đăng tin",
  login: "Đăng nhập"
};

export const categoryPanel = {
  title: "Danh mục sản phẩm"
};

export const productPanel = {
  title: "Danh sách tất cả sản phẩm",
  card: {
    currencyUnit: "đ",
    newPercentage: "Mới"
  },
  empty: "Không tìm thấy bất kỳ sản phẩm nào"
};

export const seeMore = "Xem thêm";

export const footer = {
  contact: {
    hotline: {
      label: "Liên hệ hỗ trợ với chúng tôi",
      number: "1900.001.001"
    },
    social: {
      label: "Theo dõi chúng tôi trên"
    }
  },
  navigations: {
    about: "Giới thiệu",
    recruitment: "Tuyển dụng",
    policy: "Chính sách điều khoản và bảo mật",
    refund: "Chính sách hoàn tiền",
    help: "Trung tâm trợ giúp"
  },
  infor: {
    label: "Thông tin liên hệ",
    bussiness:
      "Mã số doanh nghiệp: 0123 456 789<br/>Giấy chứng nhận đăng ký doanh nghiệp do Cục XXX cấp vào ngày DD / MM / YY",
    address_1:
      "Chi nhánh Linh Trung:<br/>Quận Thủ Đức, TP Hồ Chí Minh<br/>Điện thoại: (84.8) 38 962.823 - 38 967.366",
    address_2:
      "Chi nhánh Tp HCM:<br/>227, Nguyễn Văn Cừ, Quận 5, TP Hồ Chí Minh<br/>Điện thoại: (84.8) 38 353.193"
  }
};

export const postForm = {
  generalSession: {
    title: "Thông tin chung sản phẩm",
    fields: {
      name: {
        label: "Tên sản phẩm",
        placeholder: "Tên sản phẩm"
      },
      price: {
        label: "Giá sản phẩm",
        placeholder: "Giá (VND)"
      },
      category: {
        label: "Loại sản phẩm",
        placeholder: "Chọn loại sản phẩm"
      },
      status: {
        label: "Độ mới sản phẩm",
        placeholder: "0-100"
      }
    }
  },
  detailSession: {
    title: "Thông tin chi tiết sản phẩm",
    fields: {
      describe: {
        label: "Mô tả sản phẩm",
        placeholder: "Nhập mô chi tiết sản phẩm"
      },
      address: {
        label: "Địa chỉ",
        street: "Số nhà, tên đường",
        ward: "Xã",
        district: "Huyện",
        city: "Tỉnh"
      },
      images: {
        label: "Hình ảnh",
        note: "Vui lòng cung cấp hình ảnh thực sản phẩm. Cung cấp tối đa 5 hình ảnh sản phẩm",
        err: "Vui lòng cung cấp ít nhất một hình ảnh cho sản phẩm"
      }
    }
  },
  note: "Xin hãy cung cấp thông tin trung thực về sản phẩm",
  err: "Vui lòng kiểm tra lại thông tin sản phẩm",
  actions: {
    preview: "Xem trước",
    post: "Đăng tin",
    cancel: "Huỷ"
  },
  dialog: {
    success: {
      title: "Sản phẩm của bạn đã được đăng thành công",
      body: "Sản phẩm của bạn đã được đăng trên hệ thống thành công. Bạn có thể quản lý sản phẩm trong mục <b>'Quản lý tin'</b>",
      actions: {
        confirm: "Xác nhận"
      }
    },
    cancel: {
      title: "Bạn có muốn thoát khỏi đăng sản phẩm ?",
      body: "Bạn sẽ thoát khỏi trang đăng sản phẩm. Các thông tin đã nhập sẽ bị mất đi và không được lưu",
      actions: {
        confirm: "Xác nhận",
        cancel: "Huỷ"
      }
    }
  }
};

export const editForm = {
  generalSession: {
    title: "Thông tin chung sản phẩm",
    fields: {
      name: {
        label: "Tên sản phẩm",
        placeholder: "Tên sản phẩm"
      },
      price: {
        label: "Giá sản phẩm",
        placeholder: "Giá"
      },
      category: {
        label: "Loại sản phẩm",
        placeholder: "Chọn loại sản phẩm"
      },
      status: {
        label: "Độ mới sản phẩm",
        placeholder: "Độ mới"
      }
    }
  },
  detailSession: {
    title: "Thông tin chi tiết sản phẩm",
    fields: {
      describe: {
        label: "Mô tả sản phẩm",
        placeholder: "Nhập mô chi tiết sản phẩm"
      },
      address: {
        label: "Địa chỉ",
        street: "Số nhà, tên đường",
        ward: "Xã",
        district: "Huyện",
        city: "Tỉnh"
      },
      state: {
        title: "Trạng thái sản phẩm"
      },
      images: {
        label: "Hình ảnh",
        note: "Vui lòng cung cấp hình ảnh thực sản phẩm. Cung cấp tối đa 5 hình ảnh sản phẩm",
        err: "Vui lòng cung cấp ít nhất một hình ảnh cho sản phẩm"
      }
    }
  },
  note: "Xin hãy cung cấp thông tin trung thực về sản phẩm",
  err: "Vui lòng kiểm tra lại thông tin sản phẩm",
  actions: {
    save: "Lưu và Thay đổi",
    cancel: "Huỷ"
  },
  empty: "Không tìm thấy sản phẩm này trên hệ thống",
  dialog: {
    success: {
      title: "Sản phẩm của bạn đã được cập nhật thành công",
      body: "Sản phẩm của bạn đã được cập nhật trên hệ thống thành công. Bạn có thể quản lý sản phẩm trong mục <b>'Quản lý tin'</b>",
      actions: {
        confirm: "Xác nhận"
      }
    },
    cancel: {
      title: "Bạn có muốn thoát khỏi chỉnh sửa sản phẩm ?",
      body: "Bạn sẽ thoát khỏi trang chỉnh sửa sản phẩm. Các thông tin đã chỉnh sửa sẽ bị mất đi và không được lưu",
      actions: {
        confirm: "Xác nhận",
        cancel: "Huỷ"
      }
    }
  }
};

export const dashboard = {
  title: "Quản lý tin",
  table: {
    stt: "STT",
    image: "Hình ảnh",
    name: "Tên sản phẩm",
    category: "Loại",
    price: "Giá sản phẩm",
    datePost: "Ngày đăng",
    status: "Trạng thái",
    action: "Thao tác"
  },
  empty: "Bạn chưa đăng bất cứ sản phẩm nào lên hệ thống",
  dialog: {
    delete: {
      title: "Bạn có chắc muốn xoá bài đăng ?",
      body: "Sản phẩm của bạn sẽ bị xoá khỏi hệ thống và sẽ không thể tìm kiếm. Thao tác này không thể khôi phục!",
      actions: {
        confirm: "Xoá sản phẩm",
        cacel: "Huỷ"
      }
    }
  }
};

export const product = {
  generalSession: {
    title: "Thông tin chung sản phẩm",
    fields: {
      date: {
        title: "Ngày đăng"
      },
      user: {
        name: "Người dùng ẩn danh",
        posted: "Sản phẩm đã đăng",
        rate: "Đánh giá"
      },
      name: {
        title: "Tên sản phẩm"
      },
      images: {
        title: "Hình ảnh"
      },
      price: {
        title: "Giá sản phẩm"
      },
      category: {
        title: "Loại sản phẩm"
      },
      status: {
        title: "Độ mới sản phẩm"
      }
    }
  },
  detailSession: {
    title: "Thông tin chi tiết sản phẩm",
    fields: {
      newPercentage: {
        title: "Tình trạng độ mới",
        content: "Thông tin chưa được cập nhật"
      },
      address: {
        title: "Địa chỉ",
        content: "Thông tin chưa được cập nhật"
      },
      state: {
        title: "Trạng thái sản phẩm",
        content: "Thông tin chưa được cập nhật"
      }
    }
  },
  description: {
    title: "Thông tin mô tả sản phẩm",
    content: "Thông tin chưa được cập nhật"
  },
  empty: "Không tìm thấy sản phẩm trên hệ thống",
  actions: {
    addToCart: "Thêm vào giỏ hàng",
    buyNow: "Mua ngay"
  }
};

export const cart = {
  title: "Quản lý giỏ hàng",
  total: "Tổng tiền",
  table: {
    stt: "STT",
    image: "Hình ảnh",
    name: "Tên sản phẩm",
    price: "Giá sản phẩm",
    quantity: "Số lượng",
    action: "Thao tác"
  },
  numItems: "Số lượng sản phẩm",
  actions: {
    checkout: "Thanh toán"
  },
  empty: "Không có sản phẩm nào trong giỏ hàng của bạn",
  dialog: {
    delete: {
      title: "Bạn có chắc muốn sản phẩm khỏi giỏ hàng ?",
      body: "Sản phẩm của bạn sẽ bị xoá khỏi giỏ hàng. Thao tác này không thể khôi phục!",
      actions: {
        confirm: "Xoá sản phẩm",
        cacel: "Huỷ"
      }
    }
  }
};

export const checkout = {
  loginRequest: {
    question: "Bạn chưa có tài khoản?",
    action: "Đăng nhập ngay"
  },
  deliverySession: {
    title: "Thông tin nhận hàng",
    fields: {
      name: {
        placeholder: "Họ tên người nhận"
      },
      phone: {
        placeholder: "Số điện thoại"
      },
      email: {
        placeholder: "Email"
      },
      street: {
        placeholder: "Số nhà, tên đường"
      },
      city: {
        placeholder: "Tỉnh"
      },
      district: {
        placeholder: "Huyện"
      },
      ward: {
        placeholder: "Xã"
      },
      note: {
        placeholder: "Ghi chú thêm (Ví dụ: Giao giờ hành chánh)"
      }
    }
  },
  paymentSession: {
    title: "Thông tin thanh toán",
    options: {
      cod: "Thanh toán khi nhận hàng",
      zalopay: "Ví điện tử ZaloPay",
      momo: "Ví Momo",
      vnpay: "VNPAY"
    }
  },
  actions: {
    confirm: "Xác nhận mua hàng",
    cancel: "Huỷ"
  },
  err: "Vui lòng kiểm tra lại thông tin mua hàng"
};
