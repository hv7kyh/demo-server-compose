import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    /**
     * 주석임당
     * 서브모듈의 변경사항을 푸시하면
     * 상위 리포에서 깃액션이 트리거 될까?
     */
    return 'Hello World! this is v1';
  }
}
